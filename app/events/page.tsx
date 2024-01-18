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
import ceo from "../../public/assets/events/ceo.png";
import expo from "../../public/assets/events/expo.png";
import adventure from "../../public/assets/events/adventure.png";
import suc from "../../public/assets/events/suc.png";

import tanmay from "../../public/assets/team/tanmay.jpg";
import tanishqa from "../../public/assets/team/tanishqa.jpg";

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#1f2937] shadow-2xl rounded-3xl flex justify-center items-center overflow-hidden m-5 p-5">
      <div
        className={`relative h-full w-full flex flex-col justify-center items-center rounded-3xl overflow-hidden event-card transition-transform transform-gpu ${
          isHovered ? "tilt-animation" : ""
        }`}
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
                  isHovered ? "scale-125 duration-200" : ""
                }`}
              />
            </div>
          </div>
          <div className="text-4xl flex justify-center mt-12 font-medium">
            {event.title}
          </div>
        </div>

        {isHovered && (
          <div className="p-1 absolute inset-0 flex flex-col items-center gap-10 rounded-3xl justify-center bg-white bg-opacity-70 transition-opacity duration-300 opacity-100 overflow-hidden text-black">
            <div className="mt-1 text-2xl font-extrabold">{event.title}</div>
            <div className="p-1 overflow-hidden">
              <p>{event.description}</p>
            </div>
            <div>
              <button className="bg-transparent hover:bg-[#d5242a] text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-10 gap-10 px-2">
      {events.map((event, index) => (
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
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ceo,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ipl,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ceo,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "Wallstreet",
      thumbnail: ipl,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
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
                <div className="flex justify-center mt-10 pb-16">
                  <Link
                    href="/events/carnival"
                    className="text-center text-white text-base w-3/4 md:w-1/2 lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34] uppercase"
                  >
                    View Conso Carnival
                  </Link>
                </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xs md:max-w-2xl">
                      <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] bg-black lg:scale-90">
                        <div className="bg-black">
                          <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                            <Image
                              src={tanmay}
                              alt="Tanmay"
                              className="scale-[1.4] md:scale-[1.5] lg:scale-100 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-4">
                          <span className="font-bold uppercase text-base md:text-lg lg:text-xl xl:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                            Tanmay Nagrale
                          </span>
                          <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                          <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">
                            Head Of Events and Planning
                          </span>
                          <div className="flex justify-center gap-2">
                            <Link
                              href="https://www.linkedin.com/in/tanmay-nagrale-6b38b7205/?originalSubdomain=in"
                              target="_blank"
                            >
                              <svg
                                className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0"
                                viewBox="0 0 43 43"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z"
                                  fill="#FF2D34"
                                />
                              </svg>
                            </Link>
                            <div className="text-white text-[12px] lg:text-[14px] w-3/4 lg:w-full">
                              <div className="grid grid-rows-2 gap-1 justify-items-start">
                                <Link
                                  href="mailto:nagraletanmay123@gmail.com"
                                  target="_blank"
                                >
                                  nagraletanmay123@gmail.com
                                </Link>
                                <Link href="tel:914188972" target="_blank">
                                  +91 9146188972
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] bg-black lg:scale-90">
                        <div className="bg-black">
                          <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                            <Image
                              src={tanishqa}
                              alt="Tanishqa"
                              className="scale-[1.4] md:scale-[1.5] lg:scale-100 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-4">
                          <span className="font-bold uppercase text-base md:text-lg lg:text-xl xl:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                            Tanishqa Mishra
                          </span>
                          <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                          <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">
                            Head Of Events and Planning
                          </span>
                          <div className="flex justify-center gap-2">
                            <Link
                              href="https://www.linkedin.com/in/tanishqa-mishra-406ab5209/?originalSubdomain=in"
                              target="_blank"
                            >
                              <svg
                                className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0"
                                viewBox="0 0 43 43"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z"
                                  fill="#FF2D34"
                                />
                              </svg>
                            </Link>
                            <div className="text-white text-[12px] lg:text-[14px] w-3/4">
                              <div className="grid grid-rows-2 gap-1 justify-items-start">
                                <Link
                                  href="mailto:nagraletanmay123@gmail.com"
                                  target="_blank"
                                >
                                  tanishqam30@gmail.com
                                </Link>
                                <Link href="tel:914188972" target="_blank">
                                  +91 9179713005
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
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
