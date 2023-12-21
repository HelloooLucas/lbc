import React from "react";
import { useRouter } from "next/router";
import useConversation from "../../hooks/use-conversation";

function Conversation() {
  const {
    query: { conversationId },
  } = useRouter();
  const { isFetching, messages, error, sendMessage } = useConversation();

  if (!conversationId) return <p>No conversation selected</p>;

  if (isFetching && !messages) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!messages.length) return <p>No messages to display</p>;

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
      <button
        disabled={sendMessage.isPending}
        onClick={() => sendMessage.mutate("Hello there")}
      >
        Send message
      </button>
    </div>
  );
}

export default Conversation;
