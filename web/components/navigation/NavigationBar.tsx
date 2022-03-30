import { Box, Container, Text, useMantineColorScheme } from "@mantine/core";
import { ReactElement } from "react";
import navItems from "@/utils/navItems";
import Link from "@/components/navigation/Link";
import LinkButton from "@/components/navigation/LinkButton";

const NavigationBar = (): ReactElement => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box component="nav">
      <Container
        size="xl"
        py={10}
        sx={{ display: "flex", justifyContent: "space-between" }}
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
      </Container>
    </Box>
  );
};

export default NavigationBar;
