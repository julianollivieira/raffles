import { Box, Container, MediaQuery } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import NavigationBar from "@/components/navigation/NavigationBar";
import ColorSchemeToggle from "@/components/input/ColorSchemeToggle";
import Footer from "@/components/navigation/Footer";

interface Props {
  children: ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
}

const Layout = ({ children, hideNav, hideFooter }: Props): ReactElement => {
  return (
    <>
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
        {!hideNav && <NavigationBar />}
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <ColorSchemeToggle />
          </Box>
        </MediaQuery>
        <Container
          size="xl"
          sx={{
            "@media (min-width: 769px)": {
              paddingLeft: 75,
              paddingRight: 75,
            },
          }}
        >
          <Box component="main">{children}</Box>
        </Container>
      </Box>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
