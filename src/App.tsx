import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import {
	Add,
	Travel,
	Audio,
	Visual,
	TicketRound,
	NumberRound,
} from "./components/pages";

// redux
import store from "./components/redux";

const App = () => {
	return (
		<div className="app">
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/ticket">
							<TicketRound />/
						</Route>
						<Route exact path="/add">
							<Add />
						</Route>
						<Route exact path="/travel">
							<Travel />
						</Route>
						<Route exact path="/audio">
							<Audio />
						</Route>
						<Route exact path="/visual">
							<Visual />
						</Route>
						<Route exact path="/number">
							<NumberRound />
						</Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
