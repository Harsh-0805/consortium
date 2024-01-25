"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";
import gsap from "gsap";

import wallstreet from "../../public/assets/events/wallstreet.png";
import ipl from "../../public/assets/events/ipl.png";
import ceo from "../../public/assets/events/ceo.webp";
import expo from "../../public/assets/events/expo.png";
import adventure from "../../public/assets/events/adventure.png";
import suc from "../../public/assets/events/suc.webp";
import neo from "@/public/assets/events/NEO.png";
import ted from "@/public/assets/events/ted.png";
import render from "@/public/assets/events/render.jpg";
import bizmun from "@/public/assets/events/bizmun.jpg";
import codebizz from "@/public/assets/events/codebizz.jpg";
import shark from "@/public/assets/events/shark.png";
import vishleshan from "@/public/assets/events/Vishleshan.png";
import swades from "@/public/assets/events/swades.webp";

import khushi from "../../public/assets/team/khushi3.jpg";
import jai from "../../public/assets/team/jai1.jpg";
import shravani from "../../public/assets/team/shravani.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const EventCard = ({ event }: { event: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black border-2 border-red-600 shadow-2xl rounded-3xl flex justify-center items-center overflow-hidden m-5 p-5">
      <div
        className="relative h-full w-full flex flex-col justify-center items-center rounded-3xl overflow-hidden event-card transition-transform transform-gpu"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`floating_div h-4/5 w-4/5 items-center transition-transform ${
            isHovered ? "blur-sm" : ""
          }`}
        >
          <div className="flex justify-center mt-6">
            <div>
              <Image
                src={event.thumbnail}
                alt="Event Thumbnail"
                width="210"
                height="210"
                className={`rounded-full h-52 ${
                  isHovered ? "tilt-animation" : ""
                }`}
              />
            </div>
          </div>
          <div className="text-3xl text-red-500 flex justify-center mt-12 font-semibold">
            {event.title}
          </div>
        </div>

        {isHovered && (
          <div className="p-1 absolute inset-0 flex flex-col items-center gap-10 rounded-3xl justify-center text-white bg-opacity-70 transition-opacity duration-300 opacity-100 overflow-hidden">
            <div className="mt-1 text-2xl font-extrabold">{event.title}</div>
            <div className="p-1 overflow-hidden font-semibold">
              <p>{event.description}</p>
            </div>
            <div>
              {event.site && (
                <Link href={event.site} rel="noreferrer" target="_blank">
                  <button className="bg-transparent hover:bg-[#d5242a] text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
                    Register
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventList = ({ events }: { events: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-10 gap-10 px-2">
      {events.map((event: any, index: number) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

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

  const events = [
    {
      title: "TedX",
      thumbnail: ted,
      description:
        "The TEDx talk intends to empower the youth with bright ideas and help them witness the future through the eyes of a veteran.",
      site: null,
    },
    {
      title: "Vishleshan",
      thumbnail: vishleshan,
      description:
        "Vishleshan, 180DC VNIT's flagship Case Study Competition, provides n exceptional platform for students to demonstrate their strategic insight and innovative thinking.",
      site: null,
    },
    {
      title: "Codebizz",
      thumbnail: codebizz,
      description:
        "CodeBizz, organized by E-Cell VNIT Nagpur, is a unique fusion of entrepreneurial spirit and technological innovation.",
      site: null,
    },
    {
      title: "Biz-MUN",
      thumbnail: bizmun,
      description:
        "BIZ-CON is a unique event merging structure of national MUN with a focus on business a d commerece.",
      site: null,
    },
    {
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
      site: "https://wallstreet.ecellvnit.org",
    },
    {
      title: "IPL Auction",
      thumbnail: ipl,
      description:
        "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction.",
      site: "https://ipl.ecellvnit.org",
    },
    {
      title: "CEO",
      thumbnail: ceo,
      description:
        "CEO event cultivates leadership and management skills in students through real-world challenges, calculated risks, and competition to become influential leaders.",
      site: "https://ceo.ecellvnit.org",
    },
    {
      title: "Startup Expo",
      thumbnail: expo,
      description:
        "Startup Expo is a national exhibition for startups to showcase innovations, network with participants, speakers, investors, and organizations from India.",
      site: "https://expo.ecellvnit.org",
    },
    {
      title: "Ad-venture",
      thumbnail: adventure,
      description:
        "Ad-venture is an advertisement design competition that tests creativity and marketing strategy to create enticing ads for product sales.",
      site: "https://adventure.ecellvnit.org",
    },
    {
      title: "StartUp Conclave",
      thumbnail: suc,
      description:
        "StartUp Conclave is a national business plan competition that promotes entrepreneurship and fosters great ideas into successful undertakings.",
      site: "https://suc.ecellvnit.org",
    },
    {
      title: "NEO",
      thumbnail: neo,
      description:
        "NEO is a PAN India examination and a skill enhancement program for students of class yth to 12th grade to nurture and test their entreprenuerial skills.",
      site: "https://neo.ecellvnit.org",
    },
    {
      title: "Shark Tank Conso",
      thumbnail: shark,
      description:
        "Shart Tank Conso, an adoption of the shrak tank wherein ten teams will be shortlisted and will be given an opportunity to pitch their ideas to the investors.",
      site: null,
    },
    {
      title: "Render Ico",
      thumbnail: render,
      description:
        "All the world's painted a shade of blue, and we fill it up with catchy designs to move people's eyes from sky to your idea.",
      site: "https://render-ico.ecellvnit.org",
    },
    {
      title: "Swades",
      thumbnail: swades,
      description:
        "Swades organized by E-Cell,VNIT focuses on the social aspect of entrepreneurhip solving problems like village rehabilitation, education and emplowerment.",
      site: null,
    },
    // Add more events as needed
  ];

  return (
    // <div className="h-full bg-[#121212] bg-[url('/assets/event_red1.png')] bg-center bg-blend-color bg-no-repeat">
    //   <div className="h-full bg-gradient-to-b from-[#000_25%] via-[rgba(0,0,0,0)_54.05%] to-[#000_100%]">
    //     <div className="w-full h-full flex justify-center overflow-hidden">
    //       <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
    //         <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
    //           <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
    //           <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
    //             Events
    //           </span>
    //           <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
    //         </div>
    //         <EventList events={events} />
    //         <div className="flex justify-center mt-10 py-16">
    //           <Link
    //             href="/events"
    //             className="text-white text-lg lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center"
    //           >
    //             View all events
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <Cursor isDesktop={isDesktop} />
      <div className="bg-[#121212]">
        <div className="bg-red-800 bg-[url('/assets/event_red2.png')] bg-blend-darken bg-cover bg-left bg-no-repeat">
          <div className="h-full bg-gradient-to-b from-[#000_-7.15%] via-[rgba(0,0,0,0.7)_55.96%] to-[#000_91.54%]">
            <Navbar />
            <div className="w-full h-full flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] px-6 py-16">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                    Events
                  </span>
                  <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                </div>

                <EventList events={events} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-[url('/assets/red.png')] bg-top">
          <div className="h-full bg-gradient-to-b from-[#000_8%] via-[rgba(0,0,0,0.7)_26.83%] to-[#000_93.79%]">
            <div className="w-full h-full flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]">
                    Contact Us
                  </span>
                  <div className="w-3/4 lg:w-1/4 h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                  <h2 className="text-white mt-6 text-center text-xs sm:text-base">
                    For any queries relating to speaker sessions, do reach out
                    to us at{" "}
                    <Link
                      href="mailto:consortium@ecellvnit.co.in"
                      className="text-[#FF2D34]"
                    >
                      consortium@ecellvnit.co.in
                    </Link>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-10 px-2">
                  <div />
                  <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      <div className="w-auto hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.3)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={khushi}
                            alt="khushi"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Khushi Tank
                            </h1>
                            <p className="text-gray-400">Head Of Operations</p>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="tel:8275844551">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="mailto:khushitank41@gmail.com">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link
                              href="http://www.linkedin.com/in/khushitank"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="w-auto hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.3)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={jai}
                            alt="jai"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Jai Mehra
                            </h1>
                            <p className="text-gray-400">Head Of Operations</p>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="tel:9820919570">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="mailto:rohitmehrajai@gmail.com">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link
                              href="https://www.linkedin.com/in/jai-mehra-16a112131/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="w-auto hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.3)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={shravani}
                            alt="shravani"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Shravani Bhongade
                            </h1>
                            <p className="text-gray-400">Head Of Operations</p>
                            <a
                              href=""
                              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all duration-500"
                            ></a>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="tel:8275782707">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="mailto:shravanibhongade678@gmail.com">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link
                              href="https://www.linkedin.com/in/shravani-bhongade-836305233"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
