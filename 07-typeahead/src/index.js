import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from "react-router-dom";
import App from "./App";
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


ReactDOM.render(
	<BrowserRouter>
		<div className="container">
			<div className="page-header">
				<h2>Autocomplete Demo using react-autocomplete-react</h2>
			</div>			
			<Route exact path="/" component={App} />			
		</div>		
	</BrowserRouter>
	,document.getElementById("app"));