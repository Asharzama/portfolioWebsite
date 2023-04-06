import React, { useState } from "react";

const WorkExperienceList = ({ job }) => {
  const [showDescription, setShowDescription] = useState(false);

  const DescriptionHandler = () => {
    setShowDescription((prev) => !prev);
  };
  return (
    <div>
      <h5 className="vertical-timeline-element-title">{job.companyName}</h5>
      <h6 className="vertical-timeline-element-subtitle">{job.position}</h6>
      <div className="row">
        {job.skills.map((skill, index) => (
          <div className="col-md-6 col-sm-12 " key={index}>
            <p className="skills">{skill}</p>
          </div>
        ))}
      </div>
      <p className="timeline-element" onClick={DescriptionHandler}>
        {showDescription
          ? job.description
          : `${job.description.substring(0, 120)}...read more`}
      </p>
    </div>
  );
};

export default WorkExperienceList;
