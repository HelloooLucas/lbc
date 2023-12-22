import { Meta, StoryObj } from "@storybook/react";
import ConversationCard from ".";

const meta = {
  title: "ConversationCard",
  component: ConversationCard,
  excludeStories: ["twoDaysAgo"],
} satisfies Meta<typeof ConversationCard>;

type Story = StoryObj<typeof meta>;

export const UserIsSender: Story = {
  args: {
    id: "1",
    senderId: 1,
    senderNickname: "Sender's name",
    recipientNickname: "Recipient's name",
    lastMessageTimestamp: Date.now(),
  },
};

export const UserIsRecipient: Story = {
  args: {
    id: "1",
    senderId: 2,
    senderNickname: "Sender's name",
    recipientNickname: "Recipient's name",
    lastMessageTimestamp: Date.now(),
  },
};

const today = new Date();
today.setDate(today.getDate() - 2);
export const twoDaysAgo = today.getTime();

export const MessageSentTwoDaysAgo: Story = {
  args: {
    id: "1",
    senderId: 1,
    senderNickname: "Sender's name",
    recipientNickname: "Recipient's name",
    lastMessageTimestamp: twoDaysAgo,
  },
};

export default meta;
