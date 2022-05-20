import { Box, Container, Loader, MediaQuery } from "@mantine/core";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import NavigationBar from "@/components/navigation/NavigationBar";
import ColorSchemeToggle from "@/components/input/ColorSchemeToggle";
import Footer from "@/components/navigation/Footer";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
  requireAuthenticated?: boolean;
  requireUnauthenticated?: boolean;
  skipSpinner?: boolean;
}

const Layout = ({
  children,
  hideNav,
  hideFooter,
  requireAuthenticated = false,
  requireUnauthenticated = false,
  skipSpinner = false,
}: Props): ReactElement => {
  const { user, userLoaded } = useAuth();
  const [showContent, setShowContent] = useState<boolean>(false || skipSpinner);
  const router = useRouter();

  useEffect(() => {
    if (userLoaded) {
      if (requireAuthenticated && user !== null) setShowContent(true);
      if (requireAuthenticated && user === null) router.push("/log-in");

      if (requireUnauthenticated && user !== null) router.push("/raffles");
      if (requireUnauthenticated && user === null) setShowContent(true);

      if (!requireAuthenticated && !requireUnauthenticated) {
        setShowContent(true);
      }
    }
  }, [user, userLoaded, requireAuthenticated, requireUnauthenticated, router]);

  return showContent ? (
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
  ) : (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader />
    </Box>
  );
};

export default Layout;
