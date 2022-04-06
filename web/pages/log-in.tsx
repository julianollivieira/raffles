import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Box, Button, Paper, Text, TextInput } from "@mantine/core";
import PasswordInputWithRequirements from "@/components/input/PasswordInputWithRequirements";
import Link from "@/components/navigation/Link";
import LinkButton from "@/components/navigation/LinkButton";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 56px)",
        }}
      >
        <Paper sx={{ width: "400px" }} p={30} shadow="xs">
          <Text
            align="center"
            sx={{ fontSize: 50 }}
            pb={30}
            weight="bold"
            color="gray"
          >
            LOG IN
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <TextInput placeholder="Your email" label="Email " required />
            <PasswordInputWithRequirements
              placeholder="Your password"
              label="Password"
              required
            />
            <Link
              href="/forgot-your-password"
              color="gray"
              size="xs"
              sx={{ fontWeight: "normal", textAlign: "right" }}
            >
              Forgot your password?
            </Link>
            <Box
              pt={30}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <LinkButton variant="subtle" href="/sign-up" color="gray">
                Sign up instead
              </LinkButton>
              <Button sx={{ fontWeight: "bold" }}>Log in</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;
