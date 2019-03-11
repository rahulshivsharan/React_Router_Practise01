import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route, Switch} from "react-router-dom";  
import App from "./modules/App";
import Repos from "./modules/Repos";
import About from "./modules/About";

ReactDOM.render(
	(<BrowserRouter>
		<Switch>			
			<Route  exact path="/" component={App} />
			<Route  exact path="/repos" component={Repos} />
			<Route  exact path="/about" component={About} />		
		</Switch>
	</BrowserRouter>),	document.getElementById("app"));