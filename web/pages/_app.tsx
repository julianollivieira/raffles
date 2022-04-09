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
import Footer from "@/components/navigation/Footer";

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
          <Box
            sx={(theme) => ({
              minHeight: "100vh",
              backgroundColor:
                theme.colorScheme === "light"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[9],
              backgroundImage:
                theme.colorScheme === "light"
                  ? "url(/imgs/backgrounds/background_light.svg)"
                  : "url(/imgs/backgrounds/background_dark.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            })}
          >
            <Component {...pageProps} />
          </Box>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
