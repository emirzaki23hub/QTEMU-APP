import React from "react";
import About from "../Content/About";
import Member from "../Content/Member";
import NextMeetup from "../Content/NextMeetup";
import Notification from "../Content/Notification";
import PastMeetupCard from "../Content/PastMeetupCard";

function Meetup() {
  return (
    <div>
      <Notification />
      <NextMeetup
        text="Awesome meetup and event"
        date="25 January 2019"
        text1="Hello, Javascript & Node.js Ninjas!"
        text2="Get Ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!"
      />
      <About />
      <Member />
      <PastMeetupCard />
    </div>
  );
}

export default Meetup;
