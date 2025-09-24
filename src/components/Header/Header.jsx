import { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./Header.css";

function Header() {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive((prev) => !prev);
	};

	return (
		<>
			<header className="topbar">
				<div className="container">
					<h1 className="logo">
						<a href="#home">Sebastian Heynes</a>
					</h1>

					<ul className="navigation hidden-mobile">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>

					<button className="burger hidden-desktop" onClick={toggleMenu}>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M3 5H21" />
							<path d="M3 12H21" />
							<path d="M3 19H21" />
						</svg>
					</button>
				</div>
			</header>

			<MobileMenu active={menuActive} onClose={toggleMenu} />
		</>
	);
}

export default Header;
