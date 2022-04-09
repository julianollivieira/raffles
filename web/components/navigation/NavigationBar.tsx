import {
  Box,
  Burger,
  Container,
  MediaQuery,
  Paper,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { ReactElement, useState } from "react";
import navItems from "@/utils/navItems";
import Link from "@/components/navigation/Link";
import LinkButton from "@/components/navigation/LinkButton";
import Logo from "@/components/Logo";

const NavigationBar = (): ReactElement => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Paper component="nav" shadow="xs">
      <Container
        size="xl"
        py={10}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media (min-width: 769px)": {
            paddingLeft: 75,
            paddingRight: 75,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            href="/"
            sx={(theme) => ({
              ":hover": {
                textDecoration: "none",
              },
              fontSize: 23,
              color: dark ? theme.colors.gray[0] : theme.colors.gray[9],
              display: "flex",
              alignItems: "center",
            })}
            mr={20}
          >
            <Logo mr={5} sx={{ height: 20 }} withText />
          </Link>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box sx={{ display: "flex", gap: 20 }}>
              {navItems.map((navItem) => (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  size="sm"
                  sx={(theme) => ({
                    color: theme.colors.gray[6],
                    "&:hover": {
                      textDecoration: "none",
                      color: theme.colors.gray[7],
                    },
                    fontWeight: "bold",
                  })}
                >
                  {navItem.label}
                </Link>
              ))}
            </Box>
          </MediaQuery>
        </Box>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 20 }}>
            <LinkButton variant="subtle" href="/log-in" color="gray">
              Log in
            </LinkButton>
            <LinkButton href="/log-in">Sign up for free</LinkButton>
          </Box>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </MediaQuery>
      </Container>
    </Paper>
  );
};

export default NavigationBar;
