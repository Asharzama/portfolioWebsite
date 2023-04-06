import React, { useState } from "react";
import { FcExpand, FcLink } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const ProjectList = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { name, description, hostedLink, githubLink, techUsed } = project;

  const DescriptionHandler = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="project-items">
      <div className="title" onClick={DescriptionHandler}>
        <h5>{name}</h5>
        <p
          style={{
            transform: `rotate(${showDescription ? "0deg" : "180deg"})`,
          }}
        >
          <FcExpand size={20} />
        </p>
      </div>
      <div>
        {showDescription ? description : `${description.substring(0, 125)}...`}
      </div>
      <div className="row">
        {techUsed.map((tech, index) => (
          <div className=" col-md-6 col-sm-12" key={index}>
            <div className="tech-used">{tech}</div>
          </div>
        ))}
      </div>
      <div className="link-button">
        <a href={hostedLink} target="_blank" rel="noreferrer">
          <FcLink size={20} />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <SiGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
