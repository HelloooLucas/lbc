import { useState } from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global-styles";

import { comfortaa } from "../fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <div className={comfortaa.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
