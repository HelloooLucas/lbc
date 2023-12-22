import React from "react";
import BaseLink from "next/link";
import styled from "styled-components";
import { getLoggedUserId } from "../../../utils/getLoggedUserId";
import formatConversationDate from "../../../utils/format-conversation-date";

const Link = styled(BaseLink)`
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 8px;
`;

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr min-content;
  grid-gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background-color: #e0cdff;
    transition: 0.15s;
  }
`;

const Picture = styled.div`
  width: 40px;
  height: 40px;
  background-color: #c5c5c5;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 18px;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 12px;
  color: #a0a0a0;
`;

interface ConversationCardProps {
  id: string;
  senderId: number;
  senderNickname: string;
  recipientNickname: string;
  lastMessageTimestamp: number;
}

function ConversationCard({
  id,
  senderId,
  senderNickname,
  recipientNickname,
  lastMessageTimestamp,
}: ConversationCardProps) {
  const userId = getLoggedUserId();
  const date = formatConversationDate(lastMessageTimestamp);

  return (
    <Link href={`/conversation/${id}`}>
      <Wrapper>
        <Picture />

        <div>
          <Name>
            {senderId === userId ? recipientNickname : senderNickname}
          </Name>
          <Date>{date}</Date>
        </div>
      </Wrapper>
    </Link>
  );
}

export default ConversationCard;
