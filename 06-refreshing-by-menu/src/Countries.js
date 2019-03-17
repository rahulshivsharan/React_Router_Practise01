import React from "react";
import {Link,Route,BrowserRouter,} from "react-router-dom";
import Country from "./Country"

export default class Countries extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div className="row">
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
								<div className="panel panel-default">
		  							<div className="panel-body">		    							
		    							<Link to="/countries/americas">America</Link>
		  							</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="panel panel-default">
		  							<div className="panel-body">		    							
		    							<Link to="/countries/asia">Asia</Link>
		  							</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="panel panel-default">
		  							<div className="panel-body">
		    							<Link to="/countries/africa">Africa</Link>
		  							</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="panel panel-default">
		  							<div className="panel-body">
		    							<Link to="/countries/europe">Europe</Link>
		  							</div>
								</div>
							</div>
						</div>
						
					</div>

					<div className="col-md-9">
						<Route exact path="/countries/:country" component={Country} />						
					</div>
				</div> 
			</BrowserRouter>
		)
	}
}