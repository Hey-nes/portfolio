// Components
import Button from "components/Button/Button";
import SkillList from "components/SkillList/SkillList";

// Styling
import "components/ProjectItem/ProjectItem.css";

function ProjectItem({ title, src, alt, skills, description, buttons }) {
	return (
		<>
			<h2 className="project-title">{title}</h2>
			<img className="project-image" src={src} alt="alt" />
			<SkillList skills={skills} />
			<p>{description}</p>
			<div className="button-container">
				{buttons.map((button) => (
					<Button icon={button.icon} variant={button.variant}>
						{button.text}
					</Button>
				))}
			</div>
		</>
	);
}

export default ProjectItem;
