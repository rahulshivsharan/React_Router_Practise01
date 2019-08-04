import React from "react";
import ReactDOM from "react-dom";
import ContinentInfo from "./ContinentInfo";
import {BrowserRouter,Route,Link} from "react-router-dom";

export default class Continent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"continentList" : [
				{
					"display" : "Africa",
					"value" : "africa"
				},
				{
					"display" : "Americas",
					"value" : "americas"
				},
				{
					"display" : "Asia",
					"value" : "asia"
				},
				{
					"display" : "Oceania",
					"value" : "oceania"
				},
				{
					"display" : "Europe",
					"value" : "europe"
				}		
			]
		}
	}

	render(){
		return (
			<BrowserRouter>
				<div className="row">
					<div className="col-md-3">
						<ul className="list-groups">
						{
							this.state.continentList.map(function(continentObj,index){
								var url = "/WorldInfo/continents/" + continentObj.value;
								return(
									<li key={continentObj.value} className="list-group-item">
										<Link to={url}>{continentObj.display}</Link>
									</li>
								)
						 	})
						}
						</ul>								
					</div>
					<div className="col-md-9">
						<Route exact path="/WorldInfo/continents/:continentCode" component={ContinentInfo} />						
					</div>
				</div>
			</BrowserRouter>
		)
	}
};