"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <AnimatePresence mode="wait">
      <section
        id="get_in_touch"
        className="py-6 px-4  dark:bg-transparent dark:bg-gradient-to-b dark:from-accentBgGrey dark:via-gray-900 dark:to-mainBlack  bg-white"
      >
        <Form />
      </section>
    </AnimatePresence>
  );
};

export default GetInTouch;
