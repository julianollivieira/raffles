import {
  Box,
  Burger,
  Container,
  MediaQuery,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { ReactElement, useState } from "react";
import navItems from "@/utils/navItems";
import Link from "@/components/navigation/Link";
import LinkButton from "@/components/navigation/LinkButton";

const NavigationBar = (): ReactElement => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Box component="nav">
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
          <Text
            sx={(theme) => ({
              fontWeight: "bolder",
              fontSize: 23,
              color: dark ? theme.colors.gray[0] : theme.colors.gray[9],
            })}
            mr={20}
          >
            RAFFLES
          </Text>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box sx={{ display: "flex", gap: 20 }}>
              {navItems.map((navItem) => (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  sx={(theme) => ({
                    color: theme.colors.gray[5],
                    "&:hover": {
                      textDecoration: "none",
                      color: theme.colors.gray[6],
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
            <Link
              href="/log-in"
              sx={(theme) => ({
                color: theme.colors.gray[5],
                "&:hover": {
                  textDecoration: "none",
                  color: theme.colors.gray[6],
                },
                fontWeight: "bold",
              })}
            >
              Log in
            </Link>
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
    </Box>
  );
};

export default NavigationBar;
