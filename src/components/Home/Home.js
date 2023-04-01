import React from "react";
import "./Home.css";
import Logo from "./bg.avif";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d">
      <Header />
      <div className="home ">
        <div className="left text-black" id="left">
          <div className="h-text">
            <div className="wealth text-white"> THE GREATEST WEALTH </div>
            <div className="health text-white"> IS HEALTH </div>
            <div className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
              nesciunt quo natus ut iste voluptatibus vero maxime iure expedita
              odio quidem error illo molestiae repudiandae suscipit perferendis,
              adipisci recusandae!
            </div>
            <div className="button" id="button">
              <Link to="/signup">
                <button type="button" className="butt">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Home;
