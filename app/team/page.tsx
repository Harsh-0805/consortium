"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { classNames } from "@/components/utils/helper";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { render } from "react-dom";
import * as Ariakit from "@ariakit/react";
// import "./styles.css";
import Harsh from "@/public/assets/harsh.jpg";

export default function Team() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [members] = React.useState({
    Admin: [
      {
        id: 0.1,
        title: "Dr. Pramod M. Padole",
        position: "Director, VNIT",
        // image: director,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.2,
        title: "Dr. Dilip H. Lataye",
        position: "Dean Student Welfare, VNIT",
        // image: lataye,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.3,
        title: "Dr. Ashish S Chaurasia",
        position: "Assoc. Dean Student Activity & Sports, VNIT",
        // image: chaurasia,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
    ],
    Core: [
      {
        id: 0.1,
        title: "Dr. S. S. Bhat",
        position: "Advisory",
        // image: bhatt_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.2,
        title: "Dr. R. V. Taiwade",
        position: "Professor Incharge",
        // image: taiwade_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.3,
        title: "Dr. K. Balasundaram",
        position: "Professor Incharge",
        // image: karthik_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 1,
        title: "Bhargav Choudhury",
        position: "President",
        // image: bhargav,
        show: true,
        linkedin: "https://www.linkedin.com/in/bhargav-choudhury-2371a7197/",
        mail: "bhargavchoudhury071@gmail.com",
        phone: "6376128630",
      },
      {
        id: 2,
        title: "Rajat Patni",
        position: "Vice President",
        // image: rajat,
        show: true,
        linkedin: "https://www.linkedin.com/in/rajat-patni-9508211a0/",
        mail: "rajat.s.patni@gmail.com",
        phone: "7028081122",
      },
      {
        id: 3,
        title: "Atharva Balpande",
        position: "Treasurer",
        // image: balpande,
        show: true,
        linkedin: "https://www.linkedin.com/in/atharva-balpande-59105b218/",
        mail: "atharvabalpande07@gmail.com",
        phone: "8446103465",
      },
      {
        id: 4,
        title: "Harsh Kaabra",
        position: "Head of Corporate Communications",
        // image: kaabra,
        show: true,
        linkedin: "https://www.linkedin.com/in/harsh-kaabra-4641221b9/",
        mail: "harshkaabra@gmail.com",
        phone: "7620216041",
      },
      {
        id: 5,
        title: "Vaishnavi Kench",
        position: "Head of Corporate Communications",
        // image: kench,
        show: true,
        linkedin: "https://www.linkedin.com/in/vaishnavi-kench-a9651b211/",
        mail: "vaishnavikench5@gmail.com",
        phone: "9359630766",
      },
      {
        id: 6,
        title: "Nikhil Khanwani",
        position: "Head of Corporate Communications",
        // image: khanwani,
        show: true,
        linkedin: "https://www.linkedin.com/in/nikhil-khanwani-3a33471ba/",
        mail: "nk.nikhilkhanwani@gmail.com",
        phone: "9359630766",
      },
      {
        id: 7,
        title: "Akanksha Dudhe",
        position: "Head of Brand Development",
        // image: akanksha,
        show: true,
        linkedin: "https://www.linkedin.com/in/akanksha-dudhe-600444205/",
        mail: "atdudhe29@gmail.com",
        phone: "72182221890",
      },
      {
        id: 8,
        title: "Rohit Chouhan",
        position: "Head of Brand Development",
        // image: rohit,
        show: true,
        linkedin: "https://www.linkedin.com/in/rohit-chouhan-9a4a95213/",
        mail: "rohitgone123@gmail.com",
        phone: "9021255966",
      },
      {
        id: 9,
        title: "Dweeja Reddy",
        position: "Head of Technical Affairs",
        // image: dweeja,
        show: true,
        linkedin: "https://www.linkedin.com/in/dweeja-reddy-devi-b12508204/",
        mail: "dweeja54@gmail.com",
        phone: "8317567940",
      },
      {
        id: 10,
        title: "Abhiuday Gupta",
        position: "Head of Technical Affairs",
        // image: abhiuday,
        show: true,
        linkedin: "https://www.linkedin.com/in/cp-Coder",
        mail: "gupta.abhiuday.109@gmail.com",
        phone: "9517680322",
      },
      {
        id: 11,
        title: "Tanmay Nagrale",
        position: "Head Of Events and Planning",
        // image: tanmay,
        show: true,
        linkedin: "https://www.linkedin.com/in/tanmay-nagrale-6b38b7205/",
        mail: "nagraletanmay123@gmail.com",
        phone: "9146188972",
      },
      {
        id: 12,
        title: "Tanishqa Mishra",
        position: "Head Of Events and Planning",
        // image: tanishqa,
        show: true,
        linkedin: "https://www.linkedin.com/in/tanishqa-mishra-406ab5209/",
        mail: "tanishqam30@gmail.com",
        phone: "9179713005",
      },
      {
        id: 13,
        title: "Priyanshu Singh",
        position: "Head of Public Relations",
        // image: priyanshu,
        show: true,
        linkedin: "https://www.linkedin.com/in/priyanshu-singh-480405214/",
        mail: "thisispriyanshu2001@gmail.com",
        phone: "9920479815",
      },
      {
        id: 14,
        title: "Mitali Khodke",
        position: "Head of Public Relations",
        // image: mitali,
        show: true,
        linkedin: "https://www.linkedin.com/in/mitali-khodke-63408220b/",
        mail: "mitalikhodke@gmail.com",
        phone: "9309576732",
      },
      {
        id: 15,
        title: "Kushagra Upadhyaya",
        position: "Head of Operations",
        // image: kushagra,
        show: true,
        linkedin: "https://www.linkedin.com/in/kushagra-upadhyaya-967b7220a/",
        mail: "kushagraupa5@gmail.com",
        phone: "9414741300",
      },
      {
        id: 16,
        show: false,
        title: "",
        position: undefined,
        // image: "",
        linkedin: "",
        mail: "",
        phone: "",
      },
      {
        id: 17,
        title: "Atharv Borkute",
        position: "Head of Operations",
        // image: borkute,
        show: true,
        linkedin: "https://www.linkedin.com/in/atharv-borkute-5a396620b/",
        mail: "borkuteatharva@gmail.com",
        phone: "8010610772",
      },
    ],
    Advisory: [
      {
        id: 1,
        title: "Nikita Lohiya",
        // image: nikita,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/nikita-lohiya-4b21161a1/",
        mail: "lohiyanikita01@gmail.com",
        phone: "8390863006",
      },
      {
        id: 2,
        title: "Siddhesh Dumbre",
        // image: siddhesh,
        show: true,
        linkedin: "https://www.linkedin.com/in/siddhesh-dumbre-b7aa76195/",
        mail: "sdumbre07@gmail.com",
        phone: "7057997990",
      },
      {
        id: 3,
        title: "Vanshika Gupta",
        // image: vanshika,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/vanshikagupta-/",
        mail: "vg11072001@gmail.com",
        phone: "9166845041",
      },
      {
        id: 4,
        title: "Bhavishya Jain",
        // image: bhavishya,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/bhavishya-jain-212051196/",
        mail: "bhavishyajn7@gmail.com",
        phone: "9130612265",
      },
      {
        id: 5,
        title: "Tanvi Khurana",
        // image: tanvi,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/tanvi-khurana-1149651b4/",
        mail: "tksagi1212@gmail.com",
        phone: "7757820308",
      },
      {
        id: 6,
        title: "Jay Chheda",
        // image: jay,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/jay-chheda-8739a0192/",
        mail: "jaychheda2410@gmail.com",
        phone: "9870036145",
      },
      {
        id: 7,
        title: "Snehal Patil",
        // image: snehal,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/snehal-patil-10b08a1a7/",
        mail: "snehalpatil1801@gmail.com",
        phone: "9423132631",
      },
      {
        id: 8,
        title: "Prasen Kumar",
        // image: prasen,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/prasen-kumar-b19b541b3/",
        mail: "prasenk05@gmail.com",
        phone: "6265346554",
      },
      {
        id: 9,
        title: "Mehul Madne",
        // image: mehul,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/mehul-madne-932446191/",
        mail: "mmadne1999@gmail.com",
        phone: "9307627987",
      },
      {
        id: 10,
        title: "Niharika Madke",
        // image: niharika,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/niharika-madke-5879721b4/",
        mail: "niharikamadke@gmail.com",
        phone: "9726594357",
      },
      {
        id: 11,
        title: "Deepak Patil",
        // image: deepak,
        position: undefined,
        show: true,
        linkedin: "https://www.linkedin.com/in/deepak-patil-156390176/",
        mail: "patildeep2000@gmail.com",
        phone: "8485095752",
      },
    ],
  });

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

  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const defaultSelectedId = "default-selected-tab";
  // render() {
  return (
    <>
      <Cursor isDesktop={isDesktop} />
      <div className="bg-red-800 bg-[url('/assets/event_red2.png')] bg-blend-darken bg-cover bg-left bg-no-repeat">
        <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,0.78)] via-[rgba(0,0,0,0.72)] to-[rgb(0,0,0,1)]">
          <div className="w-full min-h-screen flex justify-center overflow-hidden">
            <div className="p-14 lg:p-6 mt-6">
              <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                <Tab.Group
                  selectedIndex={selectedIndex}
                  onChange={setSelectedIndex}
                >
                  <Tab.List className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-40 items-center justify-between max-w-xs md:max-w-5xl text-lg md:text-2xl lg:text-4xl font-semibold">
                    {Object.keys(members).map((member) => (
                      <Tab
                        key={member}
                        className={({ selected }) =>
                          classNames(
                            "uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A] outline-none",
                            selected ? "" : "text-white"
                          )
                        }
                      >
                        {member.toUpperCase()}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-6">
                    {Object.values(members).map((memberGp, idx) => (
                      <Tab.Panel
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
                      >
                        {memberGp.map((member, idx) => (
                          <>
                            {!member?.show ? (
                              <div key={idx} />
                            ) : (
                              // <div
                              //   key={idx}
                              //   className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] bg-black lg:scale-90"
                              // >
                              //   <div className="bg-black">
                              //     <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                              //       <Image
                              //         src={member.image}
                              //         alt={member.title}
                              //         className="scale-[1.2] md:scale-[1.5] lg:scale-100 w-full"
                              //       />
                              //     </div>
                              //     <div className="flex flex-col justify-center items-center gap-2 p-4">
                              //       <span className="font-bold uppercase text-base md:text-lg lg:text-xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                              //         {member.title}
                              //       </span>
                              //       <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                              //       {member.position && (
                              //         <span className="font-medium text-xs xl:text-base text-center text-[#949494]">
                              //           {member.position}
                              //         </span>
                              //       )}
                              //       <div className="flex justify-center gap-2">
                              //         {member.linkedin && (
                              //           <Link
                              //             href={`${member.linkedin}`}
                              //             target="_blank"
                              //           >
                              //             <svg
                              //               className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0"
                              //               viewBox="0 0 43 43"
                              //               fill="none"
                              //               xmlns="http://www.w3.org/2000/svg"
                              //             >
                              //               <path
                              //                 d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z"
                              //                 fill="#FF2D34"
                              //               />
                              //             </svg>
                              //           </Link>
                              //         )}
                              //         {member.mail && member.phone && (
                              //           <div className="text-white text-[10px] lg:text-[14px] w-3/4 lg:w-full">
                              //             <div className="grid grid-rows-2 gap-0 justify-items-start">
                              //               <Link
                              //                 href={`mailto:${member.mail}`}
                              //                 target="_blank"
                              //               >
                              //                 {member.mail}
                              //               </Link>
                              //               <Link
                              //                 href={`tel:${member.phone}`}
                              //                 target="_blank"
                              //               >
                              //                 +91 {member.phone}
                              //               </Link>
                              //             </div>
                              //           </div>
                              //         )}
                              //       </div>
                              //     </div>
                              //   </div>
                              // </div>
                              <div
                                key={idx}
                                className="bg-black gap-8 flex-wrap flex justify-center items-center"
                              >
                                <div className="w-64 h-82 p-2 bg-whilte rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
                                  <div className="absolute bg-[#d5242a] w-full h-32  top-0 right-0"></div>

                                  {/* <!-- Image --> */}
                                  <div className="flex justify-center mt-4">
                                    <Image
                                      src={Harsh}
                                      alt=""
                                      className="h-52 w-52 rounded-full object-cover border-[#d5242a] z-10 hover:scale-105 hover:duration-150"
                                      width="210 "
                                    />
                                  </div>

                                  <div className="p-2 mb-3 hover:static">
                                    {/* <!-- NAME --> */}
                                    <div>
                                      <h2 className="font-extrabold text-lg mb-2 z-10 ">
                                        {member.title}
                                      </h2>
                                    </div>

                                    {/* <!-- post --> */}
                                    <div>
                                      <p className="text-sm text-gray-400">
                                        {member.position}
                                      </p>
                                    </div>

                                    <div className="flex mt-3  gap-2 ml-2 justify-evenly	">
                                      {/* Linkedin */}
                                      <div>
                                        <Link
                                          href={`${member.linkedin}`}
                                          target="_blank"
                                        >
                                          <FaLinkedin
                                            size="1.8rem"
                                            className="hover:scale-110 hover:duration-150"
                                          />
                                        </Link>
                                      </div>

                                      {/* email */}
                                      <div>
                                        <Link
                                          href={`mailto:${member.mail}`}
                                          target="_blank"
                                        >
                                          <MdEmail
                                            size="1.8rem"
                                            className="hover:scale-110 hover:duration-150 "
                                          />
                                        </Link>
                                      </div>

                                      {/* phone number */}
                                      <div>
                                        <Link
                                          href={`tel:${member.phone}`}
                                          target="_blank"
                                        >
                                          <FaPhone
                                            size="1.8rem"
                                            className="hover:scale-110 hover:duration-150"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // }
}
