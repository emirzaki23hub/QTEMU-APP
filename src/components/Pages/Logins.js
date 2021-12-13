import React, { useState } from "react";
import * as ReactBoostrap from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../../store/action";

function Logins() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="styling">
        <h2>LOGIN PAGE</h2>
        <ReactBoostrap.Form className="item" onSubmit={doSubmit}>
          <ReactBoostrap.Form.Group className="mb-3" controlId="formBasicEmail">
            <ReactBoostrap.Form.Label>Email address</ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={emailChange}
            />
            <ReactBoostrap.Form.Text className="text-muted"></ReactBoostrap.Form.Text>
          </ReactBoostrap.Form.Group>

          <ReactBoostrap.Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          >
            <ReactBoostrap.Form.Label>Password</ReactBoostrap.Form.Label>
            <ReactBoostrap.Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={passwordChange}
            />
          </ReactBoostrap.Form.Group>
          <ReactBoostrap.Button
            variant="primary"
            type="submit"
            style={{ maxWidth: "100px" }}
          >
            Submit
          </ReactBoostrap.Button>
          <div className="message">
            {state.isLoginPending && (
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                  alt="Loading..."
                />
              </div>
            )}
            {state.isLoginSuccess && (
              <div
                style={{ color: "green", fontSize: "20px", paddingTop: "10px" }}
              >
                Success.
              </div>
            )}
            {state.loginError && (
              <div
                style={{ paddingTop: "10px", color: "red", fontSize: "20px" }}
              >
                {state.loginError.message}
              </div>
            )}
          </div>
        </ReactBoostrap.Form>
      </div>
    </div>
  );
}

export default Logins;
