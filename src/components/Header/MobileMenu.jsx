// Components
import Icon from "components/Icons/Icon";

//Styles
import "components/Header/MobileMenu.css";

function MobileMenu({ active, toggleMenu }) {
	return (
		<div className={`mobile-menu ${active ? "is-active" : ""}`}>
			<button
				className="mobile-close"
				onClick={toggleMenu}
				aria-label="Close menu"
			>
				<Icon>
					<path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" />
				</Icon>
			</button>
			<ul className="mobile-navigation">
				<li>
					<a onClick={toggleMenu} href="#home">
						Home
					</a>
				</li>
				<li>
					<a onClick={toggleMenu} href="#about">
						About
					</a>
				</li>
				<li>
					<a onClick={toggleMenu} href="#projects">
						Projects
					</a>
				</li>
				<li>
					<a onClick={toggleMenu} href="#contact">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}

export default MobileMenu;
