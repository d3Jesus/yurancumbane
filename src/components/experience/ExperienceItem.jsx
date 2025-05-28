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
				<h3 className="card-title h4 d-flex justify-content-between">
					<span className="role-company">{position} {company && "@ " + company}</span>
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
