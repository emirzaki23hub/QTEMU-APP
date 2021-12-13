import React from "react";
import PastMeetup from "./PastMeetup";
import "./PastMeetupCard.css";
import { Link } from "react-router-dom";

function PastMeetupCard() {
  return (
    <div
      className="container"
      style={{ textAlign: "left", paddingTop: "20px", paddingBottom: "15px" }}
    >
      <p style={{ float: "right" }}>
        <Link to="./pastmeetupcard">See All</Link>
      </p>
      <h3>PastMeetup</h3>
      <div>
        <PastMeetup />
      </div>
    </div>
  );
}

export default PastMeetupCard;
