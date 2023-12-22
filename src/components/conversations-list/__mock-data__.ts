import { Conversation } from "../../types/conversation";

function generateMockConversation(id: number): Conversation {
  const everyThird = id % 3 === 0;

  return {
    id,
    recipientId: everyThird ? 2 : 1,
    recipientNickname: `Recipient ${id}`,
    senderId: everyThird ? 1 : 2,
    senderNickname: `Sender ${id}`,
    lastMessageTimestamp: 1625637849,
  };
}

function generateMockConversations(quantity: number = 3): Conversation[] {
  return Array.from({ length: quantity }, (_, i) =>
    generateMockConversation(i)
  );
}

export default generateMockConversations;
