import React from "react";
import Link from "next/link";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import useConversationsList from "../hooks/use-conversations-list";

function ConversationsList() {
  const userId = getLoggedUserId();
  const { isFetching, data: conversations, error } = useConversationsList();

  if (isFetching && !conversations) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!conversations.length) return <p>No conversations</p>;

  return (
    <ul>
      {conversations.map(
        ({ id, senderId, recipientNickname, senderNickname }) => (
          <Link key={id} href={`/conversation/${id}`}>
            <li>{senderId === userId ? recipientNickname : senderNickname}</li>
          </Link>
        )
      )}
    </ul>
  );
}

export default ConversationsList;
