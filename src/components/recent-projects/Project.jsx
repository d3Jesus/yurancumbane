import "./project.css";
import ProjectItem from "./ProjectItem";
import { projects } from "../../constants/index.js";

const Project = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Projects</h2>
      </div>

      <div className="row gy-4">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            description={project.description}
            stacks={project.stacks}
            delay={project.delay}
          />
        ))}
      </div>

      <p
        className="text-center mt-4"
        data-aos="zoom-in"
        data-aos-delay={projects.length + 1}
      >
        <a className="link" href="https://github.com/d3Jesus">
          View more
        </a>
      </p>
    </section>
  );
};

export default Project;
