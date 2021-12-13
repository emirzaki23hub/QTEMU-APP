import * as ReactBoostrap from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMeetups } from "../../store/action";

export function Explores() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);

  return (
    <div className="container" style={{ minHeight: "90vh" }}>
      <h1 style={{ textAlign: "left" }}>Explore</h1>
      <hr/>
      <ReactBoostrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DATE</th>
            <th>LOCATION</th>
            <th>MEMBERS</th>
            <th>ORGANIZERS</th>
            <th>DESCRIPTION</th>
            <th>ATTENDEES</th>
          </tr>
        </thead>
        <tbody>
          {state.meetups.map((meetup) => (
            <tr key={meetup.id}>
              <td>{meetup.id}</td>
              <td>{meetup.title}</td>
              <td>{meetup.date}</td>
              <td>{meetup.location}</td>
              <td>{meetup.members}</td>
              <td>{meetup.organizers}</td>
              <td>{meetup.description}</td>
              <td>{meetup.attendees}</td>
            </tr>
          ))}
        </tbody>
      </ReactBoostrap.Table>
    </div>
  );
}

export default Explores;
