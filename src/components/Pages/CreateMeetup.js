import * as ReactBoostrap from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMeetup() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [members, setMembers] = useState("");
  const [organizers, setOrganizers] = useState("");
  const [description, setDescription] = useState("");
  const [attendees, setAttendees] = useState("");
  const [past, setPast] = useState(false);

  const postData = () => {
    axios
      .post("https://fierce-wildwood-03231.herokuapp.com/meetups", {
        title,
        date,
        location,
        members,
        organizers,
        description,
        attendees,
        past,
      })
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div
      style={{ textAlign: "left", minHeight: "100vh" }}
      className="container"
    >
      <h1>Create Meeetup</h1>
      <hr />
      <div>
        <ReactBoostrap.Form>
          <ReactBoostrap.Row className="mb-3">
            <ReactBoostrap.Form.Group
              md="6"
              controlId="validationCustom03"
            ></ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="6" controlId="validationCustom03">
              <ReactBoostrap.Form.Label>Title</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Date</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Location</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Members</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Members"
                required
                value={members}
                onChange={(e) => setMembers(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Organizers</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Organizer"
                required
                value={organizers}
                onChange={(e) => setOrganizers(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Description</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                placeholder="Description"
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="3" controlId="validationCustom04">
              <ReactBoostrap.Form.Label>Attendees</ReactBoostrap.Form.Label>
              <ReactBoostrap.Form.Control
                type="text"
                placeholder="Attendees"
                required
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group md="5" controlId="validationCustom04">
              <ReactBoostrap.Form.Check
                type="checkbox"
                id="customControlAutosizing"
                label="Past"
                onChange={(e) => setPast(!past)}
                style={{paddingBottom:'10px', paddingTop:'10px', color:'red', fontWeight:'bolder'}}
              />
            </ReactBoostrap.Form.Group>
            <ReactBoostrap.Form.Group style={{ paddingTop: "10px" }}>
              <ReactBoostrap.Button type="submit" onClick={postData}>
                Create Meetup
              </ReactBoostrap.Button>
            </ReactBoostrap.Form.Group>
          </ReactBoostrap.Row>
        </ReactBoostrap.Form>
      </div>
    </div>
  );
}

export default CreateMeetup;
