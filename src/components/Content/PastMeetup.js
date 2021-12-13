import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ReactBoostrap from "react-bootstrap";
import { fetchPastMeetups } from "../../store/action";


function PastMeetup() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPastMeetups());
  }, []);

  return (
    <div>
      <ReactBoostrap.Row xs={1} md={3}>
        {state.pastmeetups
          .filter((pastmeetup) => pastmeetup.past === true)
          .map((pastmeetup) => (
            <ReactBoostrap.Col
              style={{ paddingBottom: "20px" }}
              key={pastmeetup.id}
            >
              <ReactBoostrap.Card style={{ width: "400px" }}>
                <ReactBoostrap.Card.Body style={{ textAlign: "left" }}>
                  <ReactBoostrap.Card.Title>
                    {pastmeetup.date}
                  </ReactBoostrap.Card.Title>
                  <ReactBoostrap.Card.Text>
                    <div className="card-bodi" style={{ fontWeight: "bolder" }}>
                      <hr />
                      <p>{pastmeetup.description}</p>
                      <p>{pastmeetup.attendees} went</p>
                      <ReactBoostrap.Button>View</ReactBoostrap.Button>
                    </div>
                  </ReactBoostrap.Card.Text>
                </ReactBoostrap.Card.Body>
              </ReactBoostrap.Card>
            </ReactBoostrap.Col>
          ))}
      </ReactBoostrap.Row>
    </div>
  );
}

export default PastMeetup;
