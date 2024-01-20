import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

import wallstreet from "../public/assets/events/wallstreet.png";
import ipl from "../public/assets/events/ipl.png";
import ceo from "../public/assets/events/ceo.png";

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black border-2 border-red-600 shadow-2xl rounded-3xl flex justify-center items-center overflow-hidden m-5 p-5">
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
          <div className="text-3xl text-red-500 flex justify-center mt-12 font-semibold">
            {event.title}
          </div>
        </div>

        {isHovered && (
          <div className="p-1 absolute inset-0 flex flex-col items-center gap-10 rounded-3xl justify-center text-white bg-opacity-70 transition-opacity duration-300 opacity-100 overflow-hidden">
            <div className="mt-1 text-2xl font-extrabold">{event.title}</div>
            <div className="p-1 overflow-hidden">
              <p>{event.description}</p>
            </div>
            <div>
              <button className="bg-transparent hover:bg-[#d5242a] text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
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

const Event = () => {
  const events = [
    {
      title: "Wallstreet",
      thumbnail: wallstreet,
      description:
        "Wallstreet is a stock trading competition that tests managerial skills, allows participants to buy and sell shares, interact with brokers, and discover their trading abilities.",
    },
    {
      title: "IPL Auction",
      thumbnail: ceo,
      description:
        "The IPL Auction offers a platform for participants to witness world-class players and build the strongest team using analytical skills like budget management and prediction.",
    },
    {
      title: "CEO",
      thumbnail: ipl,
      description:
        "CEO event cultivates leadership and management skills in students through real-world challenges, calculated risks, and competition to become influential leaders.",
    },
    {
      title: "Startup Expo",
      thumbnail: wallstreet,
      description:
        "Startup Expo is a national exhibition for startups to showcase innovations, network with participants, speakers, investors, and organizations from India.",
    },
    {
      title: "Ad-venture",
      thumbnail: ceo,
      description:
        "Ad-venture is an advertisement design competition that tests creativity and marketing strategy to create enticing ads for product sales.",
    },
    {
      title: "StartUp Conclave",
      thumbnail: ipl,
      description:
        "StartUp Conclave is a national business plan competition that promotes entrepreneurship and fosters great ideas into successful undertakings.",
    },
    // Add more events as needed
  ];

  return (
    <div className="h-full bg-[#121212] bg-[url('/assets/event_red1.png')] bg-center bg-blend-color bg-no-repeat">
      <div className="h-full bg-gradient-to-b from-[#000_25%] via-[rgba(0,0,0,0)_54.05%] to-[#000_100%]">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                Events
              </span>
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
            </div>
            <EventList events={events} />
            <div className="flex justify-center mt-10 py-16">
              <Link
                href="/events"
                className="text-white text-lg lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center"
              >
                View all events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
