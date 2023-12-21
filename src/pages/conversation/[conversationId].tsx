import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import useConversation from "../../hooks/use-conversation";

function Conversation() {
  const {
    query: { conversationId },
  } = useRouter();
  const [message, setMessage] = useState("");
  const { isFetching, messages, error, sendMessage } = useConversation();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await sendMessage.mutate(message);
    setMessage("");
  }

  if (!conversationId) return <p>No conversation selected</p>;

  if (isFetching && !messages) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      {messages.length > 0 ? (
        <ul>
          {messages.map(message => (
            <li key={message.id}>{message.body}</li>
          ))}
        </ul>
      ) : (
        <p>No messages to display</p>
      )}

      <form onSubmit={submit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit" disabled={sendMessage.isPending}>
          Send message
        </button>
      </form>
    </div>
  );
}

export default Conversation;
