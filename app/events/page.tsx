"use client"
import React from "react";
import EventCard from "./EventCard";

function Page() {
  const eventDetails = {
    name: "Event Name",
    thumbnail: "https://your-image-url.jpg",
    description: "The event description goes here...",
  };

  return (
    <div>
      <EventCard eventDetails={eventDetails} />
    </div>
  );
}

export default Page;
