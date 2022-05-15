import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorSchemeProvider,
  Global,
  MantineProvider,
  ColorScheme,
  Box,
} from "@mantine/core";
import { useState } from "react";
import { AuthProvider } from "@/context/authContext";

const App = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>{"Raffles"}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <link rel="icon" href="/imgs/logos/logo.svg" type="image/svg+xml" />
      </Head>
      <Global
        styles={() => ({
          "*": {
            padding: 0,
            margin: 0,
          },
          "@font-face": {
            fontFamily: "Inter",
            src: `url('./fonts/Inter.ttf') format("truetype")`,
          },
        })}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: "Inter",
            primaryColor: "cyan",
          }}
        >
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
