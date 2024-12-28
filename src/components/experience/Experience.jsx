import "./experience.css";
import AOS from "aos";
import { useEffect } from "react";
import Stacks from "../Stacks";
import { workExperience } from "../../constants";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experiences" className="section experiences">
      <div className="container section-title" data-aos="fade-up">
        <h2>Experience</h2>
      </div>

      {workExperience.map((exp) => (
        <div key={exp.id} className="row gy-4 mt-4">
          <div
            className="col-lg-4 col-sm-12"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="experience-duration">{exp.duration}</h3>
          </div>
          <div className="col" data-aos="fade-left" data-aos-delay="200">
            <h2 className="role-company">
              {exp.position} {exp.company && "@ " + exp.company}
            </h2>
            <p className="achievements">{exp.achivements}</p>
            <Stacks key={exp.id} tools={exp.tools} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
