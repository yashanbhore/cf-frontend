import React from "react";
import { Link } from "react-router-dom";
import _Logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <nav className=" navbar  navbar-expand-lg bg-black">
      <div className="Nav container-fluid">
        <div>
          <img src={_Logo} classname="logo" id="logo"></img>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="Li nav-item text-white ps-5" id="Li">
              Home
            </li>

            <li className="Li nav-item text-white ps-5" id="Li">
              Trainer
            </li>
            <li className="Li nav-item text-white ps-5" id="Li">
              Program
            </li>
            <li className="Li nav-item text-white ps-5 pe-5" id="Li">
              Contact Us
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/signup" className="pe-3">
              {" "}
              <button className=" btn btn-outline-success">Signup</button>
            </Link>

            <Link to="/login">
              {" "}
              <button className="btn btn-outline-success">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
