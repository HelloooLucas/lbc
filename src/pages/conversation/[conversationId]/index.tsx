import React from "react";
import styled from "styled-components";
import Conversation from "../../../components/conversation";
import ConversationsList from "../../../components/conversations-list";

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

const Side = styled.div`
  display: none;

  @media (min-width: 468px) {
    display: block;
  }
`;

function ConversationPage() {
  return (
    <Wrapper>
      <Side>
        <ConversationsList />
      </Side>

      <Conversation />
    </Wrapper>
  );
}

export default ConversationPage;
