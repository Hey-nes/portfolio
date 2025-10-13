//React & core libs
import React from "react";
import ReactDOM from "react-dom/client";

//Internal components
import App from "App";

//Global styles
import "index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
