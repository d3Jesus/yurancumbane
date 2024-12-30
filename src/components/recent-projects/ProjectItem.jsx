import Stacks from "../Stacks";

const ProjectItem = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt,
  stacks,
  delay,
}) => {
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="project-item text-center">
        <img src={BASE_URL + imageUrl} alt={imageAlt} className="img-fluid" />
        <div className="project-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <Stacks key={id} tools={stacks} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
