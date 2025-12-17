// Components
import Carousel from "components/Carousel/Carousel";

// Styles
import "sections/About/About.css";

function About() {
	return (
		<section id="about" className="about section">
			<h1 className="section-header">About me</h1>
			<p className="background">
				My professional background is in customer support, both as a customer service representative and leader. I am educated as a Full-stack
				Developer by Nackademin. Work experience includes Telenor/Ownit as a Backend/System Developer. I also co-founded Bitwise Media where I have worked as a Full-stack Developer.
			</p>
			<p className="description">
				I view challenges as opportunities, love to learn and develop new
				skills. I'm always obsessing about something, deconstructing it and learning everything I can about it. No challenge is too big or small, whether it involves
				programming, learning a new instrument, working on my motorcycle or even climbing a mountain. Spreading
				positivity and uplifting the people around me is my signature trait.
			</p>
			<Carousel />
		</section>
	);
}

export default About;
