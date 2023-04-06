import React, { useState } from "react";
import "./MobileNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FcHome,
  FcBusinessman,
  FcFactory,
  FcContacts,
  FcEngineering,
  FcReading,
  FcTimeline,
} from "react-icons/fc";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  const [showList, setShowList] = useState(false);

  const ShowListHandler = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div className="mobile-navbar">
      <div className="navbar-header">
        <p onClick={ShowListHandler}>
          {showList ? <MdClose size={30} /> : <GiHamburgerMenu size={25} />}
        </p>
      </div>
      <div
        className="nav-list"
        style={{ transform: `translateY(${showList ? "0 " : "-120%"})` }}
      >
        <ul>
          <li className="mobile-nav-list">
            <Link to="home" spy={true} smooth={true} duration={100}>
              <FcHome size={25} />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="about" spy={true} smooth={true} duration={100}>
              <FcBusinessman size={25} />
              <span>About</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="experience" spy={true} smooth={true} duration={100}>
              <FcFactory size={25} />
              <span>Work Experience</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="tech" spy={true} smooth={true} duration={100}>
              <FcEngineering size={25} />
              <span>Tech Stack</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="education" spy={true} smooth={true} duration={100}>
              <FcReading size={25} />
              <span>Education</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="project" spy={true} smooth={true} duration={100}>
              <FcTimeline size={25} />
              <span>Project</span>
            </Link>
          </li>
          <li className="mobile-nav-list">
            <Link to="contact" spy={true} smooth={true} duration={100}>
              <FcContacts size={25} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
