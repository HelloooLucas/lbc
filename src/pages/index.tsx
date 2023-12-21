import React from "react";
import styled from "styled-components";
import ConversationsList from "../components/conversations-list";

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
        <p>Please select a conversation</p>
        <p>Or create a new one</p>
        <button>Create a conversation</button>
      </Main>
    </Wrapper>
  );
}

export default ConversationsListPage;
