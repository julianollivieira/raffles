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
          <Box
            sx={(theme) => ({
              minHeight: "100vh",
              backgroundColor:
                theme.colorScheme === "light"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9],
            })}
          >
            <Component {...pageProps} />
          </Box>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
