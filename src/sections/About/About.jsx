// Components
import IconHome from "components/Icons/IconHome";

// Assets
import Music from "assets/Music.jpg";
import Motorcycle from "assets/Motorcycle.jpg";
import Mountain from "assets/Mountain.jpg";

// Styles
import "sections/About/About.css";

function About() {
	return (
		<section id="about" className="about section">
			<h1>About me</h1>
			<p className="background">
				Professional background in customer support. Educated as a Fullstack
				Developer by Nackademin. Work experience at Bitwise Media as a Fullstack
				Developer and at Telenor/Ownit as a Backend/System Developer. 33 years
				old, born and raised in Stockholm, Sweden.
			</p>
			<p className="description">
				A lot of things in this world interest me besides code. I would say
				learning new skills is my favorite hobby. Wether that involves learning
				how to play a new instrument, fixing something on my motorcycle or
				climbing a mountain.
			</p>
			<div className="image-container">
				<img
					src={Music}
					alt="Sebastian playing music"
				/>
				<img
					src={Motorcycle}
					alt="A 1987 Suzuki DR 600 S motorcycle"
				/>
				<img
					src={Mountain}
					alt="Sebastian on a mountain top"
				/>
			</div>
			<IconHome />
		</section>
	);
}

export default About;
