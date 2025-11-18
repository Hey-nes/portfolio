// Components
import ProjectItem from "components/ProjectItem/ProjectItem";
import Motorcycle from "assets/Motorcycle.jpg";
import IconHome from "components/Icons/IconHome";

// Styles
import "sections/Projects/Projects.css";

function Projects() {
	return (
		<section id="projects" className="projects section">
			<h1 className="section-header">Projects</h1>
			<ProjectItem
				title={"Colombine"}
				src={Motorcycle}
				alt={"Image of the website of Colombine Teaterförlag"}
				skills={["Typescript", "React", "Python", "MySQL"]}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi enim repudiandae delectus non at doloremque sequi architecto, quisquam quod repellat unde quaerat porro iste illum voluptates facere. Tenetur, sequi!"
				siteLink={"https://colombine.se"}
				repoLink={"https://github.com/hey-nes"}
			/>
			<IconHome />
		</section>
	);
}

export default Projects;
