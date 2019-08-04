import React from "react";
import ReactDOM from "react-dom";
import RegionInfo from "./RegionInfo";
import {BrowserRouter,Route,Link} from "react-router-dom";


export default class Region extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"regionList" : [
				{
					display : "European Union",
					value : "EU"
				},
				{
					display : "European Free Trade Association",
					value : "EFTA"
				},
				{
					display : "Caribbean Community",
					value : "CARICOM"
				},
				{
					display : "Pacific Alliance",
					value : "PA"
				},
				{
					display : "African Union",
					value : "AU"
				},
				{
					display : "Union of South American Nations",
					value : "USAN"
				},
				{
					display : "Eurasian Economic Union",
					value : "EEU"
				},
				{
					display : "Arab League",
					value : "AL"
				},
				{
					display : "Association of Southeast Asian Nations",
					value : "ASEAN"
				},
				{
					display : "Central American Integration System",
					value : "CAIS"
				},
				{
					display : "Central European Free Trade Agreement",
					value : "CEFTA"
				},
				{
					display : "North American Free Trade Agreement",
					value : "NAFTA"
				},
				{
					display : "South Asian Association for Regional Cooperation",
					value : "SAARC"
				}	
			] 
		}
	}
				
	render (){
		return (
			<BrowserRouter>
				<div className="row">
					<div className="col-md-3">
						<ul className="list-groups">
							{
								this.state.regionList.map(function(regionObj,index){
									var url = "/WorldInfo/regions/" + regionObj.value;
									return(				
										<li key={regionObj.value} className="list-group-item">
											<Link to={url}>{regionObj.display}</Link>
										</li>	
									)
							 	})
							}
						</ul>									
					</div>
					<div className="col-md-9">
						<Route exact path="/WorldInfo/regions/:regionCode" component={RegionInfo} />						
					</div>
				</div>
			</BrowserRouter>
		)
	}
};