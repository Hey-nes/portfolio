// Styles
import "components/Button/Button.css"

function Button( {text, icon, variant} ) {
	const className = variant === "light" ? "button light" : "button dark"
	return (
		<button className={className}>
			<p className="button-text">{text}</p>
			{icon}
		</button>
	)
}

export default Button