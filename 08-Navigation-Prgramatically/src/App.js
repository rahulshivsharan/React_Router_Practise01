import React from "react";
import ReactDOM from "react-dom";
import SelectBox from "./SelectBox";
import LoadingPage from "./LoadingPage";
import {BrowserRouter,Route,withRouter} from "react-router-dom";

var ComboBox = withRouter(SelectBox);

export default class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div className="container">
					<nav className="navbar navbar-light bg-light">
		  				<a className="navbar-brand" href="#">
		    				<img src="/assets/react-icon.png" 
		    					width="15" 
		    					height="15" 
		    					className="d-inline-block align-top" 
		    					alt="" />
		    					Route-Change
		  				</a>
					</nav>
					<div className="row">
						<div className="col-md-12">
							<ComboBox />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">						
							<Route path="/:routeParam" component={LoadingPage} />	        				
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}