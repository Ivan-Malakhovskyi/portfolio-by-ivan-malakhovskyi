"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

const {
  NEXT_PUBLIC_API_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_API_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_API_EMAILJS_TEMPLATE_ID,
} = process.env;

type IFormInput = {
  name: string;
  email: string;
  message: string;
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = yup.object({
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

type FormData = yup.InferType<typeof validationSchema>;

const Form = () => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<IFormInput>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data: FormData) => {
    try {
      console.log(data);

      setIsLoading(true);

      const resp = await emailjs.sendForm(
        NEXT_PUBLIC_API_EMAILJS_SERVICE_ID!,
        NEXT_PUBLIC_API_EMAILJS_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: NEXT_PUBLIC_API_EMAILJS_PUBLIC_KEY!,
        }
      );

      return resp;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-mainWhite dark:bg-transparent dark:bg-linear-to-b dark:from-accentBgGrey dark:to-mainBlack rounded-xl max-w-[500px] mx-auto "
    >
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Get in Touch
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="John Doe"
        />

        {errors?.name && (
          <p className="mt-1 text-red-600">{errors.name?.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="email"
        >
          Your Email
        </label>
        <input
          {...register("email")}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="you@example.com"
        />
        {errors?.email && (
          <p className="mt-1 text-red-600">{errors.email?.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full p-4  border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          placeholder="What would you like to talk about?"
        ></textarea>
        {errors?.message && (
          <p className="mt-1 text-red-600">{errors.message?.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-accentBlack dark:bg-mainBlue text-mainWhite font-semibold p-4 rounded-full dark:hover:bg-accentBlue hover:bg-slate-700 focus:bg-slate-700 transition ease-out focus:outline-none focus:ring-2 dark:focus:ring-accentBlue disabled:bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-70"
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
