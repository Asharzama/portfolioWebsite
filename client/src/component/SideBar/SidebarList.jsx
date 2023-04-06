import React from "react";
import "./SidebarList.css";
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

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      <div className="sidebar-items">
        <ul>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="home" spy={true} smooth={true} duration={100}>
              <FcHome size={25} />
              <span>Home</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="about" spy={true} smooth={true} duration={100}>
              <FcBusinessman size={25} />
              <span>About</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="experience" spy={true} smooth={true} duration={100}>
              <FcFactory size={25} />
              <span>Work Experience</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="tech" spy={true} smooth={true} duration={100}>
              <FcEngineering size={25} />
              <span>Tech Stack</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="education" spy={true} smooth={true} duration={100}>
              <FcReading size={25} />
              <span>Education</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="project" spy={true} smooth={true} duration={100}>
              <FcTimeline size={25} />
              <span>Project</span>
            </Link>
          </li>
          <li
            className={
              expandSidebar ? "sidebar-item" : "sidebar-item minimize-sidebar"
            }
          >
            <Link to="contact" spy={true} smooth={true} duration={100}>
              <FcContacts size={25} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarList;
