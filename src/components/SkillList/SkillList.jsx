// Components
import Icon from "components/Icons/Icon";

// Styles
import "components/SkillList/SkillList.css";

function SkillList({ skills }) {
	return (
		<div className="skill-container">
			{skills.map((skill) => (
				<div className="skill-item">
					<Icon>
						<path d="M5 13L9 17L19 7" />
					</Icon>
					<p>{skill}</p>
				</div>
			))}
		</div>
	);
}

export default SkillList;
