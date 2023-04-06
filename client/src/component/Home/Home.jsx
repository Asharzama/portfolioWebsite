import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="container home-content">
        <h1>Hi I'm a</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "FrontEnd Developer",
                "Full Stack Web Developer(MERN)",
                "UI / UX Developer",
                "Mobile Application Developer",
                "WordPress Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="button-container">
        <Link to="contact" spy={true} smooth={true} duration={100}>
          <div className="contact-me-button">Contact me</div>
          </Link>
          <div className="contact-me-button get-resume">
            <a
              href="./images/Ashar-zama-Khan.pdf"
              download={"Ashar_Zama_Khan_CV"}
            >
              Here's my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
