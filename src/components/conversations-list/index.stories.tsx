import ConversationsList from ".";
import { Meta, StoryObj } from "@storybook/react";
import { withMockQuery } from "../../utils/storybook";
import { CONVERSATIONS_LIST_QUERY_KEY } from "./use-conversations-list";

import db from "../../server/db.json";

const meta = {
  title: "ConversationsList",
  component: ConversationsList,
} satisfies Meta<typeof ConversationsList>;

type Story = StoryObj<typeof meta>;

export const WithFewConversations: Story = {
  decorators: [
    withMockQuery({
      queryKey: CONVERSATIONS_LIST_QUERY_KEY,
      queryData: db.conversations,
    }),
  ],
};

export const WithManyConversations: Story = {
  decorators: [
    withMockQuery({
      queryKey: CONVERSATIONS_LIST_QUERY_KEY,
      queryData: [
        ...db.conversations,
        ...db.conversations,
        ...db.conversations,
        ...db.conversations,
        ...db.conversations,
        ...db.conversations,
      ],
    }),
  ],
};

export const WithZeroConversations: Story = {
  decorators: [
    withMockQuery({
      queryKey: CONVERSATIONS_LIST_QUERY_KEY,
      queryData: [],
    }),
  ],
};

export default meta;
