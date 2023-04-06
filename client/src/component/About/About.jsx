import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row about-row">
        <div className="col-xl-6 col-md-12">
          <div className="about-image">
            <img src="./images/profile.jpg" alt="profile pic" />
          </div>
        </div>
        <div className="col-xl-6 col-md-12">
          <div className="about-details">
            <div className="about-title">
              <h3>About me</h3>
              <span className="underline"></span>
            </div>
            <p>
              Experienced Frontend Developer with 1 year of experience in
              designing and developing user-centric applications. Skilled in
              HTML, CSS, JavaScript, and React.js. Demonstrated ability to use
              creative problem-solving and analytical skills to develop
              innovative solutions. Seeking a position as a Frontend Developer
              at a growth oriented company to use my expertise to create
              engaging experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
