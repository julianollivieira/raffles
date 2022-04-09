import type { NextPage } from "next";
import { Container, Box, Text } from "@mantine/core";
import LinkButton from "@/components/navigation/LinkButton";
import Layout from "@/components/Layout";

const PageNotFound: NextPage = () => {
  return (
    <Layout hideNav hideFooter>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Text
            sx={{ fontSize: 300, fontWeight: 900, lineHeight: "300px" }}
            color="#333"
          >
            404
          </Text>
          <Text sx={{ fontSize: 40, fontWeight: 900 }} color="#111">
            You found a secret place
          </Text>
          <Text sx={{ width: 600 }} py={20} color="gray">
            Unfortunately, this is only a 404 page. You may have mistyped the
            address, or the page has been moved to another URL.
          </Text>
          <LinkButton variant="subtle" href="/">
            Take me back to the home page
          </LinkButton>
        </Box>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
