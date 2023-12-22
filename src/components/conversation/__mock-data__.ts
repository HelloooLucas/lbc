import { Message } from "../../types/message";

function generateMockMessage({
  id,
  convId,
}: {
  id: number;
  convId: number;
}): Message {
  const everyThird = id % 3 === 0;

  return {
    id,
    conversationId: convId,
    authorId: everyThird ? 2 : 1,
    timestamp: new Date().getTime(),
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat rutrum rutrum.",
  };
}

function generateMockMessages({
  quantity = 3,
  convId,
}: {
  quantity?: number;
  convId: number;
}): Message[] {
  return Array.from({ length: quantity }, (_, i) =>
    generateMockMessage({ id: i, convId })
  );
}

export default generateMockMessages;
