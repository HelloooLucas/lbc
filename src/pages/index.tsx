import React from "react";
import styled from "styled-components";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ConversationsList from "../components/conversations-list";
import {
  getConversationsList,
  CONVERSATIONS_LIST_QUERY_KEY,
} from "../components/conversations-list/use-conversations-list";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - var(--body-padding) * 2);
  background: white;
  border-radius: 30px;
  padding: 20px;

  @media (min-width: 468px) {
    grid-template-columns: minmax(min-content, 1fr) 4fr;
  }
`;

const NoConversationsSelected = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - var(--body-padding) * 2);
`;

const Main = styled.div`
  display: none;

  @media (min-width: 468px) {
    display: block;
  }
`;

function ConversationsListPage() {
  return (
    <Wrapper>
      <ConversationsList />

      <Main>
        <NoConversationsSelected>
          Please select a conversation
        </NoConversationsSelected>
      </Main>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: CONVERSATIONS_LIST_QUERY_KEY,
    queryFn: getConversationsList,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ConversationsListPage;
