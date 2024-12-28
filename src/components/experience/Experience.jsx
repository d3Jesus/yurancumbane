import "./experience.css";
import AOS from "aos";
import { useEffect } from "react";
import Stacks from "../Stacks";
import { workExperience } from "../../constants";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experiences" className="section experiences">
      <div className="container section-title" data-aos="fade-up">
        <h2>Experience</h2>
      </div>

      <div className="gy-4">
        {workExperience.map(
          ({ id, duration, position, company, achivements, tools, delay }) => (
            <ExperienceItem
              key={id}
              id={id}
              duration={duration}
              achivements={achivements}
              position={position}
              company={company}
              tools={tools}
              delay={delay}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Experience;
