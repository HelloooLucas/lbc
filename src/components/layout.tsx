import { comfortaa } from "../fonts";
import styled from "styled-components";
import React, { ReactNode } from "react";
import ConversationsList from "./conversations-list";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) 4fr;
  height: calc(100vh - var(--body-padding) * 2);
  background: white;
  border-radius: 30px;
  padding: 20px;
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Wrapper className={comfortaa.className}>
      <ConversationsList />
      {children}
    </Wrapper>
  );
}

export default Layout;
