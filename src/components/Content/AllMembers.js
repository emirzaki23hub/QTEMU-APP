import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as ReactBoostrap from "react-bootstrap";
import { fetchMeetups } from "../../store/action";

//untuk melihat semua member
function AllMembers() {
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
      <div className="post" style={{ minHeight: "100vh" }}>
        <h1>All Members</h1>
        {state.meetups.map((meetup) => (
          <div
            className="container"
            key={meetup.id}
            style={{ paddingTop: "15px" }}
          >
            <ReactBoostrap.Card>
              <ReactBoostrap.Card.Body>
                <ReactBoostrap.Card.Img
                  className="img"
                  src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                />
                <ReactBoostrap.Card.Title
                  style={{ textAlign: "left", fontWeight: "bolder", paddingLeft:'150px', paddingTop:'30px' }}
                >
                  {" "}
                  <h5> Organizers</h5>
                </ReactBoostrap.Card.Title>
                <ReactBoostrap.Card.Text style={{ textAlign: "left", paddingLeft:'150px' }}>
                  <div style={{ fontWeight: "bolder" }}>
                    <p style={{ float: "left" }}>{meetup.organizers} </p>
                  </div>
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

export default AllMembers;
