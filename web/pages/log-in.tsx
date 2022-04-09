import type { NextPage } from "next";
import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Paper,
  TextInput,
  Group,
  Checkbox,
  Text,
} from "@mantine/core";
import PasswordInputWithRequirements from "@/components/input/PasswordInputWithRequirements";
import Link from "@/components/navigation/Link";

const Home: NextPage = () => {
  return (
    <Layout hideNav hideFooter>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 56px)",
          [theme.fn.smallerThan("sm")]: {
            alignItems: "start",
            paddingTop: "50px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: {
              width: "100%",
            },
          })}
        >
          <Text
            align="center"
            sx={(theme) => ({
              fontSize: 40,
              fontWeight: "900",
              color:
                theme.colorScheme === "light"
                  ? theme.colors.gray[9]
                  : theme.colors.gray[0],
              "@media (max-width: 768px)": {
                fontSize: 30,
              },
            })}
          >
            Welcome back!
          </Text>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Link href="#" size="sm" sx={{ fontWeight: "normal" }}>
              Create account
            </Link>
          </Text>
          <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              flexDirection: "column",
              [theme.fn.largerThan("xs")]: {
                width: "400px",
              },
            })}
          >
            <TextInput label="Email" placeholder="Your email" required />
            <PasswordInputWithRequirements
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Link href="#" size="sm" sx={{ fontWeight: "normal" }}>
                Forgot password?
              </Link>
            </Group>
            <Button fullWidth mt="xl">
              Sign in
            </Button>
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "center" }} pt={20}>
            <Link href="/" size="sm" sx={{ fontWeight: "normal" }}>
              Back to the home page
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
