import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup.string().required("Password is required"),
});

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/[0-9]/, "Password must include a number")
    .matches(/[a-z]/, "Password must include a lowercase letter")
    .matches(/[A-Z]/, "Password must include a uppercase letter")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password must include a special symbol"
    )
    .min(8, "Password should be at least 8 characters"),
  termsConditionsAndPolicy: yup
    .boolean()
    .oneOf([true], "Terms and conditions and privacy policy must be accepted"),
});
