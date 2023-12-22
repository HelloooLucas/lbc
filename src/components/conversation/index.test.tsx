import React from "react";
import { useRouter } from "next/router";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import { convId } from "./index.stories";
import * as stories from "./index.stories";

const { WithFewMessages, WithManyMessages, WithZeroMessages } =
  composeStories(stories);

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  query: {
    conversationId: convId,
  },
});

describe("Conversation", () => {
  it("should render 3 messages", () => {
    render(<WithFewMessages />);
    expect(screen.getAllByTestId("message")).toHaveLength(3);
  });

  it("should render 22 messages", () => {
    render(<WithManyMessages />);
    expect(screen.getAllByTestId("message")).toHaveLength(22);
  });

  it("should render 0 messages", () => {
    render(<WithZeroMessages />);
    expect(screen.queryAllByTestId("message")).toHaveLength(0);
  });
});
