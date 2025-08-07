import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    ),
  message: yup
    .string()
    .required("Message is required")
    .max(100, "Message must be less then 100 characters"),
});
