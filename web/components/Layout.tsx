import { Box, Container, MediaQuery } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import NavigationBar from "@/components/navigation/NavigationBar";
import ColorSchemeToggle from "@/components/input/ColorSchemeToggle";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <>
      <NavigationBar />
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
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
