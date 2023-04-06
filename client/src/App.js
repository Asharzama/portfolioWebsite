import React from "react";
import Sidebar from "./component/SideBar/Sidebar";
import About from "./component/About/About";
import TechStack from "./component/TechStack/TechStack";
import Project from "./component/Projects/Project";
import WorkExperience from "./component/WorkExperience/WorkExperience";
import Education from "./component/Education/Education";
import ContactForm from "./component/ContactForm/ContactForm";
import ScrollToTop from "react-scroll-to-top";
import MobileNavbar from "./component/SideBar/MobileNavbar";

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <ContactForm />
      <ScrollToTop
        smooth={true}
        style={{
          borderRadius: "20px",
          backgroundColor: "#93d54a",
        }}
        color="#fff"
        height="20px"
        width="20px"
      />
    </div>
  );
}

export default App;
