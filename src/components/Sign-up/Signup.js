import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [phno, setphno] = useState("");
  const [password, setpassword] = useState("");

  const [allentry, setentry] = useState([]);
  const submit = (e) => {
    e.preventDefault;
    const entry = {
      username: name,
      email: email,
      age: age,
      phno: phno,
      password: password,
    };
    setentry([...allentry, entry]);
    console.log(allentry);
    return;
  };

  return (
    <section className="vh-100 gradient-custom" id="sign">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb- pb-md-0 ps-5 mb-md-5">
                  Registration Form
                </h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        value={name}
                        className="form-control form-control-lg"
                        onChange={(e) => setname(e.target.value)}
                      />
                      <label className="form-label" htmlFor="firstName">
                        Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="emailAddress">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="tel"
                        id="age"
                        className="form-control form-control-lg"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                      />
                      <label className="form-label" htmlFor="phoneNumber">
                        Age
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="form-control form-control-lg"
                        value={phno}
                        onChange={(e) => setphno(e.target.value)}
                      />
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="emailAddress">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="emailAddress"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="emailAddress">
                        Confirm Password
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <Link to="/">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      onClick={submit}
                      value="Submit"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
