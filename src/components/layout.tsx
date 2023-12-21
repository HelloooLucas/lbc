import React, { ReactNode } from "react";
import ConversationsList from "./conversations-list";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <ConversationsList />
      {children}
    </div>
  );
}

export default Layout;
