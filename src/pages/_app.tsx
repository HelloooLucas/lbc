import { useState } from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global-styles";

import {
  QueryClient,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { comfortaa } from "../fonts";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 1000 * 60 },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <GlobalStyles />
        <div className={comfortaa.className}>
          <Component {...pageProps} />
        </div>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
