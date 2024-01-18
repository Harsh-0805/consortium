"use client";
import Speakers from "@/components/Speaker";
import Event from "@/components/Events";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";

const Explore = () => {
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
      <Cursor isDesktop={isDesktop} />
      <div className="flex flex-col bg-black overflow-hidden">
        <Navbar />
        <Landing />
        <About />
        <Stats />
        <Speakers />
        <Event />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Explore;
