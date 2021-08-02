import React from "react";
import { render } from "react-dom";

//Components
import App from "./App";

//Styles
import "./styles/css/globalStyles.min.css";
import "./styles/css/globalVariables.min.css";

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
