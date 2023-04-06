import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkExperienceList from "./WorkExperienceList";
import { ImUserTie } from "react-icons/im";

const WorkExperience = () => {
  const Jobs = [
    {
      companyName: "WanderOn Experiences Pvt Ltd.",
      position: "Frontend Developer",
      duration: "November 2022 - February 2023",
      description: `• Helped in creating home landing page using Next js and styled components.
      • Created voucher form with required validations and also stored data in back4app. 
      • Created advertisement landing page for Spiti and kashmir and stored data in Google spreadsheet using Google api and parse js. 
      • Refactored backend code for sending booking confirmation email to the customer using libraries such as html-pdf, nodemailer and coded to store data in back4app using Nodejs.`,
      skills: [
        "Next Js",
        "Node Js",
        "Styled components",
        "Back4app",
        "Google API",
        "Parse Js",
      ],
    },
    {
      companyName: "Newton School",
      position: "Full Stack Web Development - Internship",
      duration: "February 2022 - November 2022",
      description: `  • Full Stack Web Development along with Data Structures and
          Algorithms, Problem Solving and Business Communication skills.
          • Participated in various Coding contest organized by the platform.
          • Working and getting hands-on experience on real time projects.`,
      skills: [
        "JAVA",
        "ReactJS",
        "Data Structure",
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
    },
    {
      companyName: "Ezzy Hardwares and Paints",
      position: "Accounting and Sales Executive",
      duration: "February 2021 - November 2021",
      description: `• Developed and implemented marketing strategies to increase sales, improved organization and business communication skills, and provided accounting services. 
      • Gained experience in Accounting, Sales and Tally ERP 9 by completing the Bachelor of Commerce in Financial Accounting. 
      • Generated 37% increase in sales information accuracy, developed a product cost-benefit analysis system with a reduction of 47% in energy costs and increased customer satisfaction by 21%.`,
      skills: [
        "Tally ERP 9",
        "Accounting",
        "Communication Skills",
        "Interpersonal Communication",
      ],
    },
  ];
  return (
    <div className="container home" id="experience">
      <div className="section-title">
        <h3>Work Experience</h3>
        <span className="underline"></span>
      </div>
      <div className="timeline">
        <VerticalTimeline lineColor="gold">
          {Jobs.map((job, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#232323",
                padding: "10px",
                boxShadow: "15px 9px 9px -2px rgba(230, 224, 224, 0.86)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #93d54a" }}
              date={job.duration}
              dateClassName="timeline-date"
              iconStyle={{ background: "#93d54a", color: "#fff" }}
              icon={<ImUserTie />}
              key={index}
            >
              <WorkExperienceList job={job} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
