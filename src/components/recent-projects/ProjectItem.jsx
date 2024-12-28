import Stacks from "../Stacks";

const ProjectItem = ({ id, title, description, stacks, delay }) => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="project-item text-center">
        <h4 className="text-white">{title}</h4>
        <div className="project-info">
          <p>{description}</p>
          <Stacks key={id} tools={stacks} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
