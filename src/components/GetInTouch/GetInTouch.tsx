"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <AnimatePresence mode="wait">
      <section
        id="get_in_touch"
        className="bg-linear-section-gradient py-6 px-4 dark:bg-transparent dark:bg-gradient-to-b dark:from-bg-secondary dark:via-bg-secondary dark:to-bg-dark-mode"
      >
        <Form />
      </section>
    </AnimatePresence>
  );
};

export default GetInTouch;
