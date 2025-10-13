//React & core libs
import { useState } from "react";

// Components
import MobileMenu from "components/Header/MobileMenu";
import Icon from "components/Icons/Icon";

//Styles
import "components/Header/Header.css";

function Header() {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive((prev) => !prev);
	};

	return (
		<>
			<header className="topbar">
				<div className="container">
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

					<button
						className="burger hidden-desktop"
						onClick={toggleMenu}
						aria-label="Open menu"
					>
						<Icon>
							<path d="M3 5H21" />
							<path d="M3 12H21" />
							<path d="M3 19H21" />
						</Icon>
					</button>
				</div>
			</header>

			<MobileMenu active={menuActive} toggleMenu={toggleMenu} />
		</>
	);
}

export default Header;
