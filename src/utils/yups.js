import * as Yup from "yup";

// Update profile validator
export const updateSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid"),
  password: Yup.string()
    .min(8, "Pasword must be 8 or more characters")
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  name: Yup.string().min(3, "Must be 3 or more characters"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone Number Must be number")
    .matches(/^0\d/, "Phone Number Must start with 0")
    .min(8, "Phone Number Must be atleast 8 digits")
    .max(14, "Phone Number Cannot exceed 14 digits"),
});

// Login validator
export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email must be filled"),
  password: Yup.string()
    .required("Password must be filled")
    .min(8, "Pasword must be 8 or more characters"),
  // .matches(/\d/, "Password should contain at least one number")
  // .matches(
  //   /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
  //   "Password should contain at least one special character"
  // ),
});
