import { Box, Container } from "@mantine/core";
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
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <ColorSchemeToggle />
      </Box>
      <Container size="xl">
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
