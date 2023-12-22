import Conversation from ".";
import { Meta, StoryObj } from "@storybook/react";
import { withMockQuery } from "../../utils/storybook";

import db from "../../server/db.json";

const convId = 1;

const meta = {
  title: "Conversation",
  component: Conversation,
  parameters: {
    nextjs: {
      router: {
        query: {
          conversationId: convId,
        },
      },
    },
  },
} satisfies Meta<typeof Conversation>;

type Story = StoryObj<typeof meta>;

export const WithFewMessages: Story = {
  decorators: [
    withMockQuery({
      queryKey: ["conversation-details", { convId }],
      queryData: db.conversations.find(conv => conv.id === convId),
    }),
    withMockQuery({
      queryKey: ["conversation-messages", { convId }],
      queryData: db.messages.filter(
        message => message.conversationId === convId
      ),
    }),
  ],
};

export const WithManyMessages: Story = {
  decorators: [
    withMockQuery({
      queryKey: ["conversation-details", { convId }],
      queryData: db.conversations.find(conv => conv.id === convId),
    }),
    withMockQuery({
      queryKey: ["conversation-messages", { convId }],
      queryData: [
        ...db.messages.filter(message => message.conversationId === convId),
        ...db.messages.filter(message => message.conversationId === convId),
        ...db.messages.filter(message => message.conversationId === convId),
        ...db.messages.filter(message => message.conversationId === convId),
      ],
    }),
  ],
};

export const WithZeroMessages: Story = {
  decorators: [
    withMockQuery({
      queryKey: ["conversation-details", { convId }],
      queryData: db.conversations.find(conv => conv.id === convId),
    }),
    withMockQuery({
      queryKey: ["conversation-messages", { convId }],
      queryData: [],
    }),
  ],
};

export const WithMobileViewport: Story = {
  decorators: [
    withMockQuery({
      queryKey: ["conversation-details", { convId }],
      queryData: db.conversations.find(conv => conv.id === convId),
    }),
    withMockQuery({
      queryKey: ["conversation-messages", { convId }],
      queryData: db.messages.filter(
        message => message.conversationId === convId
      ),
    }),
  ],
  parameters: { viewport: { defaultViewport: "iphonex" } },
};

export default meta;
