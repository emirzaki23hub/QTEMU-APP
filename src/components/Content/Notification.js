import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as ReactBoostrap from "react-bootstrap";
import { fetchMeetups } from "../../store/action";

function Notification() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);
  // const doFetchMeetups = () => {
  //   dispatch(fetchMeetups())
  // }

  return (
    <>
      <div className="post">
        {state.meetups
          .filter((meetup) => meetup.past === false)
          .map((meetup) => (
            <div
              className="container"
              key={meetup.id}
              style={{ paddingTop: "20px" }}
            >
              <ReactBoostrap.Card>
                <ReactBoostrap.Card.Body>
                  <ReactBoostrap.Card.Img
                    className="img"
                    src="https://thumbs.dreamstime.com/b/man-icon-person-vector-worker-162495520.jpg"
                  />
                  <ReactBoostrap.Card.Title style={{ textAlign: "left", fontWeight:'bolder' }}>
                    {meetup.title}
                  </ReactBoostrap.Card.Title>
                  <ReactBoostrap.Card.Text style={{ textAlign: "left" }}>
                    <p>
                      Location : {meetup.location} <br /> Members :{" "}
                      {meetup.members} <br /> Organizers : {meetup.organizers}
                    </p>
                    <ReactBoostrap.Button>Join Us</ReactBoostrap.Button>
                  </ReactBoostrap.Card.Text>
                </ReactBoostrap.Card.Body>
              </ReactBoostrap.Card>
            </div>
          ))}
      </div>
      <div></div>
    </>
  );
}

export default Notification;
