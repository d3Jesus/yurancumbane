import React from "react";
import Stacks from "../Stacks";

const ExperienceItem = ({
  id,
  duration,
  position,
  company,
  achivements,
  tools,
  delay,
}) => {
  return (
    <div className="row mb-3">
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <h3 className="experience-duration">{duration}</h3>
      </div>
      <div className="col" data-aos="fade-up" data-aos-delay={delay}>
        <h2 className="role-company">
          {position} {company && "@ " + company}
        </h2>
        <p className="achievements">{achivements}</p>
        <Stacks key={id} tools={tools} />
      </div>
    </div>
  );
};

export default ExperienceItem;
