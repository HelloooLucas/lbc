import { comfortaa } from "../fonts";
import React, { ElementType } from "react";
import { cssReset } from "../styles/global-styles";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyles = createGlobalStyle`
  ${cssReset}
`;

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
});

export function withMockQuery({
  queryKey,
  queryData,
}: {
  queryKey: (string | {})[];
  queryData: Object;
}) {
  return function WithMockQuery(Story: ElementType) {
    queryClient.setQueryData(queryKey, queryData);
    return (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    );
  };
}

export function withCssReset(Story: ElementType) {
  return (
    <>
      <GlobalStyles />
      <Story />
    </>
  );
}

export function withFonts(Story: ElementType) {
  return (
    <div className={comfortaa.className}>
      <Story />
    </div>
  );
}
