import React from "react";
import * as ReactBoostrap from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logins from "../Pages/Logins";
import "./Navbar.css";
import AllMember from "../Content/AllMembers";
import PastMeetupCard from "../Content/PastMeetupCard";
import CreateMeetup from "../Pages/CreateMeetup";
import Explores from "../Pages/Explores";
import Meetup from "../Pages/Meetup";

function Navbar() {
  return (
    <Router>
      <ReactBoostrap.Navbar
        className="menu"
        collapseOnSelect
        expand="lg"
        style={{
          background:
            "linear-gradient(90deg, rgb(69,169,169)0%, rgba(120, 94, 254) 100%)",
        }}
      >
        <ReactBoostrap.Navbar.Brand
          className="menu"
          href="#home"
          style={{
            paddingLeft: "35px",
            color: "white",
            fontSize: "25px",
            fontWeight: "bolder",
          }}
          as={Link}
          to="/"
        >
          QTEMU
        </ReactBoostrap.Navbar.Brand>
        <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBoostrap.Nav
            className="me-auto"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <ReactBoostrap.Nav.Link
              className="menu"
              style={{ color: "white" }}
              as={Link}
              to="/explore"
            >
              Explore
            </ReactBoostrap.Nav.Link>
            <ReactBoostrap.Nav.Link
              className="menu"
              as={Link}
              to="/createmeetup"
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Create Meetup
            </ReactBoostrap.Nav.Link>
          </ReactBoostrap.Nav>
          <ReactBoostrap.Nav>
            <ReactBoostrap.Nav.Link
              style={{
                paddingRight: "30px",
                color: "white",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
              eventKey={1}
              as={Link}
              to="/login"
              className="menu"
            >
              Login
            </ReactBoostrap.Nav.Link>
          </ReactBoostrap.Nav>
        </ReactBoostrap.Navbar.Collapse>
      </ReactBoostrap.Navbar>
      <div>
        <Routes>
          <Route path="/explore" element={<Explores />} />
          <Route path="/allmembers" element={<AllMember />} />
          <Route path="/pastmeetupcard" element={<PastMeetupCard />} />
          <Route path="/createmeetup" element={<CreateMeetup />} />
          <Route path="/login" element={<Logins />} />
          <Route path="/" element={<Meetup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
