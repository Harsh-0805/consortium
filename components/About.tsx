"use client";
import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import about from "../public/assets/about.png";
import Link from "next/link";
import Card from "./Card";
import Carousel from "./Carousel";

const About = () => {
  let cards = [
    {
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 100%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    return aboutScrollTriggerInstance.kill;
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <h1 ref={quoteRef} className="font-medium text-xl md:text-3xl">
      <span
        className={`about-1 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        Consortium is the flagship annual entrepreneurship summit and management
        festival of VNIT.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        It offers a platform for students to showcase their entrepreneurial
        skills and network with industry experts.{" "}
      </span>
      <span
        className={`about-3 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        The event features engaging competitions and keynote sessions, inspiring
        and fueling the spirit of entrepreneurship among attendees. Join us to
        ignite your entrepreneurial spark at Consortium!
      </span>
    </h1>
  );
  return (
    // <div id="about" className="h-5/6 lg:min-h-screen bg-red-700 bg-[url('/assets/horizon.png')] bg-cover bg-no-repeat bg-blend-normal">
    //   <div className="h-5/6 lg:h-screen w-full bg-gradient-to-b from-[rgba(0,0,0,0.9)_0%] via-[rgba(12,12,12,0.63)_77.4%] to-[rgba(0,0,0,0.9)_97.28%] grid grid-cols-1 content-center bg-opacity-80">
    //     <div className="px-10">
    //       <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#1B1B1B] shadow-[0_8px_40px_2px_rgba(255,255,255,0.08)]">
    //         <div className="bg-gradient-to-b from-[#1B1B1B] to-[rgba(0,0,0,0)]">
    //           <Image src={about} alt="about" className="" />
    //         </div>
    //         <div className="flex flex-col px-10 py-14 gap-6 lg:gap-14 justify-center">
    //           <div className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]  font-bold">ABOUT Consortium&apos; 23</div>
    //           <div className="text-white text-justify lg:text-left font-light text-[12px] sm:text-base md:text-[17px] lg:text-lg xl:text-xl">
    //             Consortium is the flagship annual entrepreneurship summit and management festival of VNIT. It offers a platform for students to showcase their entrepreneurial skills and network with industry experts. The event features engaging competitions and keynote sessions, inspiring and fueling the spirit of entrepreneurship among attendees. Join us to ignite your entrepreneurial spark at Consortium!
    //           </div>
    //           <div className="w-full flex flex-col sm:flex-row gap-10 items-center justify-center text-white text-sm lg:text-base xl:text-xl lg:justify-between">
    //             <Link href="/team" target="_blank" className="bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center w-full md:w-1/3 py-4">Team</Link>
    //             <Link href="/glimpses" target="_blank" className="bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center w-full md:w-1/3 py-4">Glimpses</Link>
    //             <Link href="/explore/#contact" className="bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center w-full md:w-1/3 py-4">Contact</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <section
        ref={targetSection}
        id="about"
        className="flex flex-col bg-red-700 bg-[url('/assets/horizon.png')] bg-cover bg-no-repeat bg-blend-normal"
      >
        <div className=" bg-gradient-to-b from-[rgba(0,0,0,0.9)_0%] via-[rgba(12,12,12,0.63)_77.4%] to-[rgba(0,0,0,0.9)_97.28%] grid grid-cols-1 content-center bg-opacity-80 ">
          <div className="text-center justify-center md:pt-8 md:text-5xl font-bold ">
            <p className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]  font-bold">
              ABOUT CONSORTIUM&apos;24
            </p>
          </div>
          <div
            className={`py-10 px-20 text-justify text-white w-full relative select-none section-container`}
          >
            {renderQuotes()}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
