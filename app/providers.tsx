"use client";

import FadeInWhenVisible from "@/components/utils/FadeInVisible";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <FadeInWhenVisible>
        <ToastContainer />
        {children}
      </FadeInWhenVisible>
    </AnimatePresence>
  );
};

export default Providers;
