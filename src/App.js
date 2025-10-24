// Components
import Header from "components/Header/Header";
import Home from "sections/Home/Home";
import About from "sections/About/About";
import Projects from "sections/Projects/Projects";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<div className="container">
					<Home />
					<About />
					<Projects />
				</div>
			</main>
		</>
	);
}

export default App;
