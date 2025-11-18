// Styles
import "components/Button/Button.css"

function Button( {children, icon, variant} ) {
	const className = variant === "light" ? "button light" : "button dark"

	return (
		<button className={className}>
			<p className="button-text">{children}</p>
			{icon}
		</button>
	)
}

export default Button