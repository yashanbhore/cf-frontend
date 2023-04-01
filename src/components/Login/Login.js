import React, { useState } from "react";
import "./Login.css";
import Signup from "../Sign-up/Signup";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [allentry, setentry] = useState([]);
  const submit = (e) => {
    e.preventDefault;
    const entry = { username: username, password: password };
    setentry([...allentry, entry]);
    console.log(allentry);
  };
  return (
    <MDBContainer fluid className=" h-110  gradient-custom" id="login">
      <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Username"
                value={username}
                id="formControlLg"
                type="email"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                value={password}
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submit}
                  onSubmit={submit}
                >
                  Login
                </button>
              </Link>

              <div>
                <p className="mb-0 pt-3">
                  Don't have an account?
                  <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
