import '../styles/globals.css'
import { useEffect, useState } from "react";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const load = async () => {
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp
