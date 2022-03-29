import { Container } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import NavigationBar from "@/components/navigation/NavigationBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <Container>
      <nav>
        <NavigationBar />
      </nav>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
