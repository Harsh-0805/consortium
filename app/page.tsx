"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import conso from "@/public/assets/conso.png";

const Home = () => {
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

  const [textToShow, setTextToShow] = useState(0);

  const ref = useRef<HTMLVideoElement>(null);
  const videoRef = useInView(ref);

  const textVariants = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 0.9, y: -290 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, yoyo: Infinity, ease: "easeInOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 2 },
    visible: { opacity: 1, y: 20, scale: 0.9 },
  };

  const textContent = [
    {
      time: 2,
      content: (
        <>
          <motion.div
            className="flex justify-center my-20 md:my-0 items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            key="logo"
          >
            <Image
              src={conso}
              alt="Consortium 23"
              className="scale-125 md:scale-100 lg:mt-20"
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 2 }}
            key="text"
          ></motion.div>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.7, delay: 4 }}
            className="flex justify-center items-center xl:mt-36"
          >
            <Link
              href="/explore"
              className="text-base xl:text-2xl text-center font-bold text-white bg-transparent border-[6px] border-gradient-b-primary px-9 py-5 uppercase tracking-widest leading-6 bg-black animate-bounce"
            >
              Explore
            </Link>
          </motion.div>
        </>
      ),
    },
  ];

  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const time = Math.floor(event.currentTarget.currentTime);
    const textIndex = textContent.findIndex((text) => text.time === time);

    if (textIndex !== -1 && textIndex !== textToShow) {
      setTextToShow(textIndex);
    }

    if (time !== currentTime) {
      setCurrentTime(time);
    }
  };

  if (currentTime === 8 && ref.current) {
    ref.current.currentTime = 7;
    ref.current.play();
  }

  return (
    <>
      <Cursor isDesktop={isDesktop} />
      <div className="relative h-screen overflow-hidden">
        <video
          ref={ref}
          autoPlay
          muted
          loop
          preload="auto"
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={"/video.mp4"} type="video/mp4" />
        </video>
        <AnimatePresence>
          {videoRef && (
            <motion.div
              key="text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center"
            >
              {textContent.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={textToShow === index ? "visible" : "hidden"}
                  variants={imageVariants}
                  className="text-center"
                >
                  {text.content}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
