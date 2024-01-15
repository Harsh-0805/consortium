import React, { useState } from "react";

import "./Event.css";

function EventCard({ eventDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-1/2 w-1/5 bg-[#1f2937] shadow-2xl rounded-3xl flex justify-center items-center overflow-hidden m-5 p-5">
      <div
        className={`relative h-full w-full flex flex-col justify-center items-center rounded-3xl overflow-hidden event-card transition-transform transform-gpu ${
          isHovered ? 'tilt-animation' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`floating_div h-4/5 w-4/5 items-center transition-transform ${
            isHovered ? 'blur-sm' : ''
          }`}
        >
          <div className="flex justify-center mt-6">
            <div>
              <img
                src={eventDetails.thumbnail}
                alt="Event Thumbnail"
                width="210"
                className={`rounded-full h-52 ${
                  isHovered ? 'scale-125 duration-200' : ''
                }`}
              />
            </div>
          </div>
          <div className="text-4xl flex justify-center mt-12 font-serif font-medium">
            {eventDetails.name}
          </div>
        </div>

        {isHovered && (
          <div className="p-5 absolute inset-0 flex flex-col items-center gap-10 rounded-3xl justify-center bg-white bg-opacity-90 transition-opacity duration-300 opacity-100 overflow-hidden text-black">
            <div className="mt-2 text-2xl font-extrabold">{eventDetails.name}</div>
            <div className="w-2/3 font-serif overflow-hidden">
              <p>{eventDetails.description}</p>
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
}

export default EventCard;
