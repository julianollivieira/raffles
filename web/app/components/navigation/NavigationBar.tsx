import {
  Box,
  Burger,
  Button,
  Container,
  Divider,
  MediaQuery,
  Menu,
  Paper,
  useMantineColorScheme,
} from "@mantine/core";
import { ReactElement, useState } from "react";
import navItems from "@/utils/items/navItems";
import Link from "@/components/navigation/Link";
import LinkButton from "@/components/navigation/LinkButton";
import Logo from "@/components/Logo";
import ColorSchemeToggle from "@/components/input/ColorSchemeToggle";
import { useAuth } from "@/context/authContext";
import { Logout, Settings, User, UserCircle } from "tabler-icons-react";

const NavigationBar = (): ReactElement => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const { user } = useAuth();

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
            {user === null ? (
              <>
                <LinkButton variant="subtle" href="/log-in" color="gray">
                  Log in
                </LinkButton>
                <LinkButton href="/sign-up">Sign up for free</LinkButton>
              </>
            ) : (
              <Menu
                control={
                  <Button>
                    <User style={{ marginRight: 10 }} size={22} />
                    {user.name}
                  </Button>
                }
              >
                <Menu.Item icon={<Settings size={14} />}>Account</Menu.Item>
                <Divider />
                <Menu.Item color="red" icon={<Logout size={14} />}>
                  Log out
                </Menu.Item>
              </Menu>
            )}
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
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Box>
          {opened && (
            <Box sx={{ height: "calc(100vh - 56px)" }}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  pt="md"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {navItems.map((navItem) => (
                    <Link
                      py={12}
                      px={25}
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
                  <Divider my="xl" mx="lg" />
                  <Box
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    <LinkButton
                      variant="subtle"
                      href="/log-in"
                      color="gray"
                      mx={25}
                    >
                      Log in
                    </LinkButton>
                    <LinkButton href="/sign-up" mx={25} mb="sm">
                      Sign up for free
                    </LinkButton>
                  </Box>
                </Box>
                <ColorSchemeToggle segmented mb="sm" />
              </Box>
            </Box>
          )}
        </Box>
      </MediaQuery>
    </Paper>
  );
};

export default NavigationBar;
