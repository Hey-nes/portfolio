// Components
import ProjectItem from "components/ProjectItem/ProjectItem";
import Colombine from "assets/Colombine.jpg";
import IconHome from "components/Icons/IconHome";

// Styles
import "sections/Projects/Projects.css";

function Projects() {
	return (
		<section id="projects" className="projects section">
			<h1 className="section-header">Projects</h1>
			<ProjectItem
				title={"Colombine"}
				src={Colombine}
				alt={"Image of the website of Colombine Teaterförlag"}
				skills={["HTML", "CSS", "PHP", "WordPress"]}
				description="Rebuilt the website for Colombine Teaterförlag, creating a new mobile-first design and integrating it into their existing technical infrastructure. Also developed a company style guide and standardized e-mail signatures. A colleague and I were solely responsible for the entire process, from preparing time and cost estimates to development, launch and
				ongoing improvements based on user feedback."
				siteLink={"https://colombine.se"}
			/>
			<IconHome />
		</section>
	);
}

export default Projects;
