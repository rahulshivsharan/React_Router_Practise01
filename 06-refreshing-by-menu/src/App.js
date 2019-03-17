import React from "react";
import {Link,Route,BrowserRouter} from "react-router-dom";
import Countries from "./Countries";
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
						    	<Link className="navbar-link" to="/countries">Countries</Link>
						    </p>
						    <p className="navbar-text">
						    	<Link className="navbar-link" to="/about">About</Link>
						    </p>
						</div>
					</nav>
					<div className="container">
						<div className="row">
							<div className="col-md-12">								 
        						<Route exact path="/countries" component={Countries} />
								<Route exact path="/about" component={About} />
							</div>
						</div>
					</div>							
				</div>			
			</BrowserRouter>	
		)
	}
}