import Header from "./components/Header/Header";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main className="main">
				<section id="home" className="section">
					<h1>Home</h1>
				</section>
				<section id="about" className="section">
					<h1>About</h1>
				</section>
				<section id="projects" className="section">
					<h1>Projects</h1>
				</section>
				<section id="contact" className="section">
					<h1>Contact</h1>
				</section>
			</main>
		</>
	);
}

export default App;
