import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";
import Theme from "../styles/theme";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const load = async () => {};

  useEffect(() => {
    load();
  }, []);

  return (
    <WagmiConfig client={client}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </WagmiConfig>
  );
}

export default MyApp;
