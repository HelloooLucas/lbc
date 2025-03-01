import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import useConversation from "./use-conversation";
import React, { FormEvent, useState } from "react";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 120px 1fr 40px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 40px 70px 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #dcdcdc;

  @media (min-width: 468px) {
    grid-template-columns: 70px 1fr;
  }
`;

const BackLink = styled(Link)`
  @media (min-width: 468px) {
    display: none;
  }
`;

const Picture = styled.div`
  width: 70px;
  height: 70px;
  background-color: #c5c5c5;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 28px;
  color: #6f17ff;
`;

const MessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  overflow-y: auto;
  height: calc(100vh - 310px);
`;

const NoMessages = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 310px);
`;

const Message = styled.div<{ isSelf: boolean }>`
  max-width: 60%;
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #f2f2f2;

  ${({ isSelf }) =>
    isSelf
      ? css`
          margin-left: auto;
          background-color: #a670ff;
          color: white;
        `
      : css`
          margin-right: auto;
        `};
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
`;

const Input = styled.input`
  background-color: #f2f2f2;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #a670ff;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
  display: grid;
  place-items: center;

  &:hover {
    background-color: #6f17ff;
    transition: 0.15s;
  }
`;

function Conversation() {
  const {
    query: { conversationId },
  } = useRouter();
  const userId = getLoggedUserId();
  const [message, setMessage] = useState("");
  const { isFetching, details, messages, error, sendMessage } =
    useConversation();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage.mutate(message);
    setMessage("");
  }

  if (!conversationId) return <p>No conversation selected</p>;

  if (isFetching && (!messages || !details)) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const { senderId, recipientNickname, senderNickname } = details;

  const contactName = senderId === userId ? recipientNickname : senderNickname;

  return (
    <Wrapper>
      <Header>
        <BackLink href="/">
          <Button>
            <Image
              src="/back-arrow.svg"
              alt="back icon"
              width="20"
              height="20"
            />
          </Button>
        </BackLink>

        <Picture />
        <Name>{contactName}</Name>
      </Header>

      <MessagesList>
        {messages.length > 0 ? (
          messages.map(message => (
            <Message
              key={message.id}
              isSelf={message.authorId === userId}
              data-testid="message"
            >
              {message.body}
            </Message>
          ))
        ) : (
          <NoMessages>No messages to display</NoMessages>
        )}
      </MessagesList>

      <Form onSubmit={submit}>
        <Input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button type="submit" disabled={sendMessage.isPending}>
          <Image src="/send.svg" alt="send icon" width="20" height="20" />
        </Button>
      </Form>
    </Wrapper>
  );
}

export default Conversation;
