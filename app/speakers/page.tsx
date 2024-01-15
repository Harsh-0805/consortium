"use client";

import Cursor from "@/components/Cursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import kiran from "../../public/assets/speakers/kiran.png";
import satish_dua from "../../public/assets/speakers/satish_dua.png";
import aman from "../../public/assets/speakers/aman.png";
import anil from "../../public/assets/speakers/anil.png";
import pankhuri from "../../public/assets/speakers/pankhuri.png";
import divya from "../../public/assets/speakers/divya.jpg";
import nandu from "../../public/assets/speakers/nandu.png";
import sharad from "../../public/assets/speakers/sharad.png";
import shirish from "../../public/assets/speakers/shirish.jpg";
import ravi from "../../public/assets/speakers/ravi.jpg";
import jatin from "../../public/assets/speakers/jatin.jpg";
import santosh from "../../public/assets/speakers/santosh.jpg";
import karan from "../../public/assets/speakers/karan.jpg";
import harsh from "../../public/assets/speakers/harsh.jpg";
import satish from "../../public/assets/speakers/satish.jpg";
import mitali from "../../public/assets/team/mitali.jpg";
import balpande from "../../public/assets/team/balpande.png";
import priyanshu from "../../public/assets/team/priyanshu.jpg";
import somdutta from "../../public/assets/speakers/somdutta.png";
import ashwani from "../../public/assets/speakers/ashwani.png";
import sohrab from "../../public/assets/speakers/sohrab.png";
import anurag from "../../public/assets/speakers/anurag.png";
import nitin from "../../public/assets/speakers/nitin.png";
import simon from "../../public/assets/speakers/simon.jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const speakersData = [
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: kiran,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: satish_dua,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: aman,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: anil,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: pankhuri,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: divya,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: nandu,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: sharad,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: shirish,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: ravi,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: jatin,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: santosh,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: karan,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: harsh,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: satish,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },

  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: nitin,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: jatin,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: somdutta,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: ashwani,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: sohrab,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: anurag,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: simon,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
];

const Speakers = () => {
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
      <div className="bg-black">
        <div className="bg-[#121212] bg-[url('/assets/red_spotlight1.png')] bg-blend-normal bg-cover bg-bottom bg-no-repeat">
          <div className="h-full bg-gradient-to-b from-[#000_2.04%] via-[rgba(0,0,0,0.6)_15.32%] to-[#000_99.78%]">
            <Navbar />
            <div className="pt-6 flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
              <span className="text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                Previous Speakers
              </span>
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
            </div>
            <div className="flex-wrap gap-6 items-center justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {speakersData.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-[#190401] relative hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] overflow-hidden group rounded-xl p-5 m-5 md:m-10  transition-all duration-500 transform"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.title}
                      width={120}
                      height={120}
                      className="w-24 lg:w-[120px] lg:h-[120px] object-center object-cover rounded-full transition-all duration-500 transform"
                    />
                    <div className="w-fit transition-all transform duration-500">
                      <h1 className="text-white font-bold text-lg">
                        {speaker.name}
                      </h1>
                      <p className="text-white text-sm">{speaker.role}</p>
                      <a className="text-sm text-white group-hover:opacity-100 opacity-0 transform transition-all delay-100 duration-500">
                        {speaker.youtube}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-cover bg-[url('/assets/red.png')] bg-top">
          <div className="h-full bg-gradient-to-b from-[#000_8%] via-[rgba(0,0,0,0.7)_26.83%] to-[#000_93.79%]">
            <div className="w-full h-full flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                    Contact Us
                  </span>
                  <div className="w-3/4 lg:w-1/4 h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
                  <h2 className="text-white mt-6 text-center text-xs sm:text-base">
                    For any queries relating to speaker sessions, do reach out
                    to us at{" "}
                    <Link
                      href="mailto:publicrelations@ecellvnit.ac.in"
                      className="text-[#FF2D34]"
                    >
                      publicrelations@ecellvnit.co.in
                    </Link>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-10 px-2">
                  <div />
                  <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-xs md:max-w-5xl">
                      <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                        <div className="bg-black">
                          <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                            <Image
                              src={priyanshu}
                              alt="priyanshu"
                              className="scale-[1.4] md:scale-[1.5] lg:scale-100 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-6 bg-black">
                          <span className="font-bold uppercase text-lg lg:text-xl xl:text-[21px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                            Priyanshu Singh
                          </span>
                          <div className="w-2/3 h-[0.02rem] bg-[#ffff] lg:my-3" />
                          <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">
                            Head of Public Relations
                          </span>
                          <div className="flex justify-center gap-2">
                            <Link
                              href="https://www.linkedin.com/in/priyanshu-singh-480405214/"
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
                                  href="mailto:thisispriyanshu2001@gmail.com"
                                  target="_blank"
                                >
                                  thisispriyanshu2001@gmail.com
                                </Link>
                                <Link href="tel:914188972" target="_blank">
                                  +91 9920479815
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                        <div className="bg-black">
                          <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                            <Image
                              src={mitali}
                              alt="mitali"
                              className="scale-[1.4] md:scale-[1.5] lg:scale-100 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-6 bg-black">
                          <span className="font-bold uppercase text-lg lg:text-xl xl:text-[21px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                            Mitali Khodke
                          </span>
                          <div className="w-2/3 h-[0.02rem] bg-[#ffff] lg:my-3" />
                          <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">
                            Head of Public Relations
                          </span>
                          <div className="flex justify-center gap-2">
                            <Link
                              href="https://www.linkedin.com/in/mitali-khodke-63408220b/"
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
                                  href="mailto:mitalikhodke@gmail.com"
                                  target="_blank"
                                >
                                  mitalikhodke@gmail.com
                                </Link>
                                <Link href="tel:914188972" target="_blank">
                                  +91 9309576732
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                        <div className="bg-black">
                          <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                            <Image
                              src={balpande}
                              alt="balpande"
                              className="scale-[1.4] md:scale-[1.5] lg:scale-100 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-6 bg-black">
                          <span className="font-bold uppercase text-lg lg:text-xl xl:text-[21px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                            Atharva Balpande
                          </span>
                          <div className="w-2/3 h-[0.02rem] bg-[#ffff] lg:my-3" />
                          <span className="font-medium text-xs xl:text-sm text-center text-[#949494]">
                            Head of Public Relations
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
                                  href="mailto:atharvabalpande07@gmail.com"
                                  target="_blank"
                                >
                                  atharvabalpande07@gmail.com
                                </Link>
                                <Link href="tel:914188972" target="_blank">
                                  +91 8446103465
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
        <Footer />
      </div>
    </>
  );
};

export default Speakers;
