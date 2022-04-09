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

const SignUp: NextPage = () => {
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
            Sign up for free!
          </Text>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account?{" "}
            <Link href="/log-in" size="sm" sx={{ fontWeight: "normal" }}>
              Log in
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
                width: "450px",
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
            <Checkbox
              label={
                <Text size="sm">
                  I have read and i accept the{" "}
                  <Link
                    href="/terms-and-conditions"
                    size="sm"
                    sx={{ fontWeight: "normal" }}
                  >
                    general terms and conditions
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="/privacy-policy"
                    size="sm"
                    sx={{ fontWeight: "normal" }}
                  >
                    privacy policy
                  </Link>
                </Text>
              }
              mt="md"
            />
            <Button fullWidth mt="xl">
              Sign up
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

export default SignUp;
