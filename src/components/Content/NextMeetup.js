import React from "react";
import * as ReactBoostrap from "react-bootstrap";

function NextMeetup(props) {
  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      <h3 style={{ textAlign: "left" }}>Next Meetup</h3>
      <ReactBoostrap.Card>
        <ReactBoostrap.Card.Body>
          <ReactBoostrap.Card.Text
            style={{ textAlign: "left", fontWeight: "bolder" }}
          >
            <p>
              {props.text} <br /> {props.date}{" "}
            </p>
            <p>
              {props.text1} <br /> {props.text2}{" "}
            </p>
          </ReactBoostrap.Card.Text>
        </ReactBoostrap.Card.Body>
      </ReactBoostrap.Card>
    </div>
  );
}

export default NextMeetup;
