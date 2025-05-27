import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectItem = ({
	id,
	title,
	description,
	imageUrl,
	imageAlt,
	demo,
	source,
	delay,
}) => {
	return (
		<div className="col-lg-4" data-aos="fade-right" data-aos-delay={delay}>
			<div className="card mb-3">
				<img src={imageUrl} alt={imageAlt} className="card-img-top" width={295} height={147} />
				<div className="card-body project-info">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>

					{demo && (
						<a href={demo} className="text-dark me-2" target="_blank">
							<FontAwesomeIcon icon={faLink} className="icon" />
							Live Demo
						</a>
					)}

					{source && (
						<a href={source} className="text-dark">
							<FontAwesomeIcon icon={faGithub} className="icon" />
							Source Code
						</a>
					)}
				</div>
			</div>
		</div>
		// <div
		//   className="col-lg-4 col-md-6"
		//   data-aos="fade-right"
		//   data-aos-delay={delay}
		// >
		//   <div className="project-item text-center">
		//     <img src={BASE_URL + imageUrl} alt={imageAlt} className="img-fluid" />
		//     <div className="project-info">
		//       <h4>{title}</h4>
		//       <p>{description}</p>
		//       <Stacks key={id} tools={stacks} />
		//     </div>
		//   </div>
		// </div>
	);
};

export default ProjectItem;
