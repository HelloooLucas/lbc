import React from "react";
import styled from "styled-components";
import ConversationCard from "./conversation-card";
import useConversationsList from "./use-conversations-list";

const Wrapper = styled.aside`
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const NoConversationsMessage = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 100px);
`;

function ConversationsList() {
  const { isFetching, data: conversations, error } = useConversationsList();

  if (isFetching && !conversations) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <Wrapper>
      <ul>
        {conversations.length > 0 ? (
          conversations.map(conversation => (
            <ConversationCard key={conversation.id} {...conversation} />
          ))
        ) : (
          <NoConversationsMessage>No conversations</NoConversationsMessage>
        )}
      </ul>
    </Wrapper>
  );
}

export default ConversationsList;
