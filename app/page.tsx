"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Cursor from "@/components/Cursor";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Page from "@/app/explore/page";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const { orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
  }, [isDesktop]);

  return (
    <>
      <Page />
    </>
  );
}
