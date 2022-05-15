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
  PasswordInput,
  LoadingOverlay,
} from "@mantine/core";
import Link from "@/components/navigation/Link";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/validationSchemas";
import { useState } from "react";
import { useAuth } from "@/context/authContext";

const LogIn: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await logIn(values.email, values.password);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    },
  });

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
            <Link href="/sign-up" size="sm" sx={{ fontWeight: "normal" }}>
              Create account
            </Link>
          </Text>
          <Paper
            shadow="xs"
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
              position: "relative",
            })}
          >
            <LoadingOverlay visible={isLoading} />
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextInput
                label="Email"
                placeholder="Your email"
                required
                name="email"
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                name="password"
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
              />
              <Group position="apart" mt="md">
                <Checkbox label="Remember me" />
                <Link href="#" size="sm" sx={{ fontWeight: "normal" }}>
                  Forgot password?
                </Link>
              </Group>
              <Button fullWidth mt="xl" type="submit">
                Log in
              </Button>
            </Box>
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

export default LogIn;
