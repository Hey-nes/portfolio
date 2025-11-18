// Components
import Icon from "components/Icons/Icon";

// Styles
import "components/Icons/IconHome.css"

function IconHome() {
	return (
		<a href="#home" className="hidden-tablet hidden-desktop">
			<Icon>
				<path d="M6 11L12 5L18 11" />
				<path d="M6 19L12 13L18 19" />
			</Icon>
		</a>
	);
}

export default IconHome;
