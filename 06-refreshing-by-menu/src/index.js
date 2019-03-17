import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter,Route} from "react-router-dom";


import 'bootstrap3/dist/css/bootstrap.min.css';

ReactDOM.render(
	<BrowserRouter>
		<Route exact path="/" component={App} />
	</BrowserRouter>
	,document.getElementById("app"));