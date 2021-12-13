import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ReactBoostrap from "react-bootstrap";
import { fetchMeetups } from "../../store/action";
import "./Member.css";

function Member() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);

  return (
    <div className="container" style={{ paddingTop: "15px" }}>
      <p style={{ float: "right" }}>
        <Link to="./allmembers">See All</Link> 
      </p>
      <h3 style={{ textAlign: "left" }}>Member</h3>
      <ReactBoostrap.Card>
        <ReactBoostrap.Card.Body>
          <ReactBoostrap.Card.Img
            className="img"
            src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          />
          <ReactBoostrap.Card.Text className="body">
          {state.meetups
          .filter((meetup) => meetup.past === false)
          .map((meetup) => (
            <div style={{paddingRight:'70px', fontWeight:'bolder'}}>
            <h5> Organizers</h5>
            <p style={{ float: "left", paddingRight: "1px" }}>{meetup.organizers} &</p>
            <p style={{ float: "right", paddingLeft: "5px" }}> {meetup.members} Others. </p>
            </div>
          ))}
          </ReactBoostrap.Card.Text>
        </ReactBoostrap.Card.Body>
      </ReactBoostrap.Card>
    </div>
  );
}

export default Member;
