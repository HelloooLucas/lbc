import React from "react";
import styled from "styled-components";
import useConversationsList from "../hooks/use-conversations-list";
import ConversationCard from "./conversation";

const Wrapper = styled.aside`
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px;
`;

function ConversationsList() {
  const { isFetching, data: conversations, error } = useConversationsList();

  if (isFetching && !conversations) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!conversations.length) return <p>No conversations</p>;

  return (
    <Wrapper>
      <ul>
        {conversations.map(conversation => (
          <ConversationCard key={conversation.id} {...conversation} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default ConversationsList;
