"use client";

import Cursor from "@/components/Cursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

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
import Contact from "@/components/Contact";

const speakersData = [
  {
    name: "DR. KIRAN BEDI",
    role: "24th Lt. Governor",
    imageUrl: kiran,
    title: "Aman",
    youtube: "Puducherry",
  },
  {
    name: "LT. GEN SATISH DUA",
    role: "Corps Commander",
    imageUrl: satish_dua,
    title: "Aman",
    youtube: "Surgical Strike, URI",
  },
  {
    name: "SIMON TAUFEL",
    role: "Former Cricket Umpire",
    imageUrl: simon,
    title: "Aman",
    youtube: "International Cricket Council",
  },
  {
    name: "Aman Dhattarwal",
    role: "Founder of Apni Kaksha & Apna College",
    imageUrl: aman,
    title: "Aman",
    youtube: "Youtube, 7M+ subscribers",
  },
  {
    name: "ANIL SWARUP",
    role: "Former IAS Officer",
    imageUrl: anil,
    title: "Aman",
    youtube: "Former Lit. Sec of India",
  },
  {
    name: "PANKHURI GIDWANI",
    role: "Miss Grand India International",
    imageUrl: pankhuri,
    title: "Aman",
    youtube: "2018",
  },
  {
    name: "DIVYA GANESH",
    role: "McKinsey & Company",
    imageUrl: divya,
    title: "Aman",
    youtube: "Partner ",
  },
  {
    name: "NANDU GIRIYAPUR",
    role: "Managing Director",
    imageUrl: nandu,
    title: "Aman",
    youtube: "Deloitte Company",
  },
  {
    name: "SHARAD SOMANI",
    role: "Executive Director",
    imageUrl: sharad,
    title: "Aman",
    youtube: "KPMG,Singapore",
  },
  {
    name: "SHIRISH ANDHARE",
    role: "Director & Head of Product",
    imageUrl: shirish,
    title: "Aman",
    youtube: "Twitter",
  },
  {
    name: "RAVI BATULLA",
    role: "Head Merchant Acquiring Solutions",
    imageUrl: ravi,
    title: "Aman",
    youtube: "Wimbo",
  },
  {
    name: "JATIN SAPRU",
    role: "Television Presentor",
    imageUrl: jatin,
    title: "Aman",
    youtube: "Star Sports",
  },
  {
    name: "SANTOSH PANPALIYA",
    role: "Senior Vice President & Head HR",
    imageUrl: santosh,
    title: "Aman",
    youtube: "Global Delivery at Infosys",
  },
  {
    name: "KARAN SHAH",
    role: "Founder & CEO",
    imageUrl: karan,
    title: "Aman",
    youtube: "IIDE - The Digital School",
  },
  {
    name: "HARSH GOELA",
    role: "Co-Founder",
    imageUrl: harsh,
    title: "Aman",
    youtube: "Goela School of Finance LLP",
  },
  {
    name: "SATISH KRISHNAN",
    role: "Former MD & Head",
    imageUrl: satish,
    title: "Aman",
    youtube: "Standard Chartered Bank",
  },

  {
    name: "NITIN BAWANKULE",
    role: "Director and Head",
    imageUrl: nitin,
    title: "Aman",
    youtube: "Digital Native Business, AWS India",
  },
  {
    name: "SOMDUTTA SINGH",
    role: "Founder & CEO",
    imageUrl: somdutta,
    title: "Aman",
    youtube: "Assiduus Global",
  },
  {
    name: "ASHWANI LOHANI",
    role: "Chief Executive Officer",
    imageUrl: ashwani,
    title: "Aman",
    youtube: "GMR Group",
  },
  {
    name: "SOHRAB SITARAM",
    role: "Co-Founder & Director",
    imageUrl: sohrab,
    title: "Aman",
    youtube: "Keventers",
  },
  {
    name: "ANURAG BATRA",
    role: "Chairman & Editor in Chief",
    imageUrl: anurag,
    title: "Aman",
    youtube: "BW Businessworld",
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
                      <h1 className="text-red-500 font-bold text-lg">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      <div className="md:w-[450px] hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={priyanshu}
                            alt="tanmay"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Nirmayee Bobade
                            </h1>
                            <p className="text-gray-400">Public Relations</p>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-[450px] hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={mitali}
                            alt="tanmay"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Aneesh Patil
                            </h1>
                            <p className="text-gray-400">Public Relations</p>
                            <a
                              href=""
                              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all duration-500"
                            ></a>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <FaLinkedin
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-[450px] hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] relative border border-red-600 lg:scale-90 mb-5 overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
                        <div className="flex items-center gap-4">
                          <Image
                            src={balpande}
                            alt="tanmay"
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-100 transform"
                          />

                          <div className="transition-all transform duration-500">
                            <h1 className="text-white-600 dark:text-gray-200 font-bold">
                              Anubhav Singh
                            </h1>
                            <p className="text-gray-400">Public Relations</p>
                            <a
                              href=""
                              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all duration-500"
                            ></a>
                          </div>
                        </div>
                        <div className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                            <Link href="">
                              <FaPhone
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
                              <MdEmail
                                size="1.8rem"
                                fill="black"
                                className="hover:scale-110 hover:duration-150"
                              />
                            </Link>
                            <Link href="">
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

export default Speakers;
