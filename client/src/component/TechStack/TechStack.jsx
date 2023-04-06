import React, { useState } from "react";
import "./TechStack.css";
import {
  FaReact,
  FaJava,
  FaPython,
  FaBootstrap,
  FaWordpress,
  FaCss3Alt,
} from "react-icons/fa";
import {
  BsStack,
  BsFillCaretDownSquareFill,
  BsFillCaretUpSquareFill,
} from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiStyledcomponents,
  SiHtml5,
} from "react-icons/si";

const TechStack = () => {
  const [showMore, setShowMore] = useState(9);

  const LoadMore = () => {
    setShowMore((prev) => prev + 3);
  };

  const LoadLess = () => {
    setShowMore((prev) => (prev = 9));
  };
  const data = [
    { name: "Full stack Developer", icon: BsStack, color: "#333" },
    { name: "Next Js", icon: SiNextdotjs, color: "#000000" },
    { name: "React Js", icon: FaReact, color: "#5ad8fb" },
    { name: "Node Js", icon: SiNodedotjs, color: "#75a16c" },
    { name: "MongoDB", icon: SiMongodb, color: "#439843" },
    { name: "Express Js", icon: SiExpress, color: "#545556" },
    { name: "JavaScript", icon: SiJavascript, color: "#e8d44d" },
    { name: "Java", icon: FaJava, color: "#317e9d" },
    { name: "Python", icon: FaPython, color: "#f7cc42" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7811f2" },
    { name: "Styled Components", icon: SiStyledcomponents, color: "#d9966f" },
    { name: "React Native", icon: TbBrandReactNative, color: "#5ad8fb" },
    { name: "WordPress", icon: FaWordpress, color: "#207196" },
    { name: "HTML", icon: SiHtml5, color: "#dc4921" },
    { name: "CSS", icon: FaCss3Alt, color: "#008ace" },
  ];
  return (
    <div className="container techstack-section" id="tech">
      <div className="section-title">
        <h3>Tech Stack</h3>
        <span className="underline"></span>
      </div>
      <div className="row">
        {data.slice(0, showMore).map((item, index) => (
          <div className="col-xl-4 col-md-6 col-sm-12" key={index}>
            <div className="tech-content">
              <div className="tech-icon">
                <item.icon color={item.color} />
              </div>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {showMore < 15 ? (
        <span className="load-more" onClick={LoadMore}>
          Load more <BsFillCaretDownSquareFill />
        </span>
      ) : (
        <span className="load-more" onClick={LoadLess}>
          Show Less <BsFillCaretUpSquareFill />
        </span>
      )}
    </div>
  );
};

export default TechStack;
