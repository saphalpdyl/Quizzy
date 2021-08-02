import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import { Home, Add, Travel } from "./components/pages";
import store from "./components/redux";

const App = () => {
	return (
		<div className="app">
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/add">
							<Add />
						</Route>
						<Route exact path="/travel">
							<Travel />
						</Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
