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
		<div className="card mt-3" data-aos="fade-up" data-aos-delay={delay}>
			<div className="card-body">
				<h3 className="card-title h4 d-flex align-items-center justify-content-between">
					{position} {company && "@ " + company}
					<span className="text-muted duration">{duration}</span>
				</h3>
				<p className="card-text">
					{achivements}
				</p>
				<Stacks key={id} tools={tools} />
			</div>
		</div>
	);
};

export default ExperienceItem;
