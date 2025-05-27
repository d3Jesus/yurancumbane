import "./project.css";
import ProjectItem from "./ProjectItem";
import { projects } from "../../constants/index.js";

const Project = () => {
	return (
		<main className="bg-gray">
			<section id="projects" className="container section projects">
				<div className="section-title" data-aos="fade-up">
					<h2>Recent Projects</h2>
				</div>

				<div className="row">
					{projects.map((project) => (
						<ProjectItem
							key={project.id}
							{...project}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Project;
