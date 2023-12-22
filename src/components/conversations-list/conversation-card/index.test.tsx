import React from "react";
import formatConversationDate, {
  getHoursAndMinutes,
} from "../../../utils/format-conversation-date";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./index.stories";
import { twoDaysAgo } from "./index.stories";

const { UserIsSender, UserIsRecipient, MessageSentTwoDaysAgo } =
  composeStories(stories);

describe("ConversationCard", () => {
  it("should render the recipient name when the user is the sender", () => {
    render(<UserIsSender />);
    expect(screen.getByText("Recipient's name")).toBeInTheDocument();
  });

  it("should render the sender name when the user is the recipient", () => {
    render(<UserIsRecipient />);
    expect(screen.getByText("Sender's name")).toBeInTheDocument();
  });

  it("should render the date in the format 'HH:MM' when the message was sent today", () => {
    render(<UserIsRecipient />);

    const date = new Date();
    const formattedDate = getHoursAndMinutes(date);

    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it("should render the date in the format 'DD:MM:YYYY' when the message was sent before today", () => {
    render(<MessageSentTwoDaysAgo />);

    const formattedDate = formatConversationDate(twoDaysAgo);

    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
