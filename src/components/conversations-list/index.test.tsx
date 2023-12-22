import React from "react";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./index.stories";

const { WithFewConversations, WithManyConversations, WithZeroConversations } =
  composeStories(stories);

describe("ConversationsList", () => {
  it("should render 3 conversations", () => {
    render(<WithFewConversations />);
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("should render 21 conversations", () => {
    render(<WithManyConversations />);
    expect(screen.getAllByRole("link")).toHaveLength(21);
  });

  it("should render 0 conversations", () => {
    render(<WithZeroConversations />);
    expect(screen.queryAllByTestId("conversation-card")).toHaveLength(0);
  });
});
