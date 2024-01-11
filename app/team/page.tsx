"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const Team = () => {
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
        title: "Dr. Karthik Balasundaram",
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
  return (
    <div className="flex flex-col bg-white w-full place-content-center px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-b from-black/0 to-black/100"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className=" absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <Image src="" alt="" className="" />
      </div>
    </motion.div>
  );
};

export default Team;
