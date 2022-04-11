import type { NextPage } from "next";
import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Paper,
  TextInput,
  Checkbox,
  Text,
  InputWrapper,
} from "@mantine/core";
import PasswordInputWithRequirements from "@/components/input/PasswordInputWithRequirements";
import Link from "@/components/navigation/Link";
import { useFormik } from "formik";
import { signupValidationSchema } from "@/utils/validationSchemas";

const SignUp: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      termsConditionsAndPolicy: false,
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log(values);
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
            Sign up for free!
          </Text>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account?{" "}
            <Link href="/log-in" size="sm" sx={{ fontWeight: "normal" }}>
              Log in
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
            })}
          >
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
              <PasswordInputWithRequirements
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                name="password"
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
              />
              <InputWrapper
                error={
                  formik.touched.termsConditionsAndPolicy &&
                  formik.errors.termsConditionsAndPolicy
                }
              >
                <Checkbox
                  name="termsConditionsAndPolicy"
                  checked={formik.values.termsConditionsAndPolicy}
                  onChange={formik.handleChange}
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
              </InputWrapper>
              <Button fullWidth mt="xl" type="submit">
                Sign up
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

export default SignUp;