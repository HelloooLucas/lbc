import ConversationsList from ".";
import { Meta, StoryObj } from "@storybook/react";
import { withMockQuery } from "../../utils/storybook";
import { CONVERSATIONS_LIST_QUERY_KEY } from "./use-conversations-list";

import generateMockConversations from "./__mock-data__";

const meta = {
  title: "ConversationsList",
  component: ConversationsList,
} satisfies Meta<typeof ConversationsList>;

type Story = StoryObj<typeof meta>;

export const WithFewConversations: Story = {
  decorators: [
    withMockQuery({
      queryKey: CONVERSATIONS_LIST_QUERY_KEY,
      queryData: generateMockConversations(),
    }),
  ],
};

export const WithManyConversations: Story = {
  decorators: [
    withMockQuery({
      queryKey: CONVERSATIONS_LIST_QUERY_KEY,
      queryData: generateMockConversations(21),
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
