import React from "react";
import {BrowserRouter,Link, Route} from "react-router-dom";
import Repos from "./Repos";
import About from "./About";

export default class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					<nav className="navbar navbar-default navbar-static-top">
						<div className="container-fluid">
							<div className="navbar-header">
						      <a className="navbar-brand" href="javaScript:void(0)">React Page</a>
						    </div>
						    <p className="navbar-text">
						    	<Link className="navbar-link" to="/repos">Repos</Link>
						    </p>
						    <p className="navbar-text">
						    	<Link className="navbar-link" to="/about">About</Link>
						    </p>
						</div>
					</nav>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Route  path="/repos" component={Repos} />
								<Route  path="/about" component={About} />
							</div>
						</div>
					</div>							
				</div>
			</BrowserRouter>			
		)
	}
}