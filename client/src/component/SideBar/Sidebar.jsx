import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import { FcPrevious } from "react-icons/fc";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const SidebarHandler = () => {
    setExpandSidebar((prev) => !prev);
  };
  return (
    <div className="container-fluid sidebar-container">
      <div
        className="sidebar"
        style={{ transform: `translateX(${expandSidebar ? "0px" : "-135px"})` }}
      >
        <div className="expand-sidebar-icon">
          <p onClick={SidebarHandler}>
            <FcPrevious
              size={35}
              style={{
                transform: `rotate(${expandSidebar ? "0deg" : "180deg"})`,
              }}
            />
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
