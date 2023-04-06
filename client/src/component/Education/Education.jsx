import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const Educations = [
    {
      degree: "Batchlor of Commerce",
      year: "2015 - 2018",
      percent: "57.0%",
    },
    {
      degree: "Intermediate (Class XII)",
      year: "2013 - 2015",
      percent: "71.69%",
    },
    {
      degree: "Matriculation (Class X)",
      year: "2012 - 2013",
      percent: "85.45%",
    },
  ];
  return (
    <div className="container home" id="education">
      <div className="section-title">
        <h3>Education</h3>
        <span className="underline"></span>
      </div>
      <div className="timeline">
        <VerticalTimeline lineColor="gold">
          {Educations.map((education, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#232323",
                padding: "10px",
                boxShadow: "15px 9px 9px -2px rgba(230, 224, 224, 0.86)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #93d54a" }}
              date={education.year}
              dateClassName="timeline-date"
              iconStyle={{ background: "#93d54a", color: "#fff" }}
              icon={<FaUserGraduate />}
              key={index}
            >
              <h5 className="vertical-timeline-element-title">
                {education.degree}
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                {education.percent}
              </h6>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
