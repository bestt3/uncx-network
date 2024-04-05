"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return <div>{children}</div>;
};

export default AosTransitionWrapper;
