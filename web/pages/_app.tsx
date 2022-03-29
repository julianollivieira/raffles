import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, MantineProvider } from "@mantine/core";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{"Raffles"}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <Global
        styles={() => ({
          "@font-face": {
            fontFamily: "Inter",
            src: `url('./fonts/Inter.ttf') format("truetype")`,
          },
        })}
      />
      <MantineProvider
        theme={{
          fontFamily: "Inter",
          primaryColor: "cyan",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;
