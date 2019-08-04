import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jQuery";
import {BrowserRouter,Route} from "react-router-dom";

export default class RegionInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"regionCode" : this.props.match.params.regionCode,
			"regionReqObj" : [],
			"isLoading" : false
		}
		this.getRegionInfo = this.getRegionInfo.bind(this);
	}			
	
	componentDidMount(){
		this.getRegionInfo(this.state.regionCode);
	}
	
	componentDidUpdate(nextProps, prevState,snapshot){		
		if(this.props.match.params.regionCode !== nextProps.match.params.regionCode){
			this.getRegionInfo(this.props.match.params.regionCode);	
		}
	}
	
	getRegionInfo(selectedRegion){
		var selectedInfoList = [], 			
			url = "https://restcountries.eu/rest/v2/regionalbloc/" + selectedRegion,
			date = new Date(),
			me = this;
					
		url += "?date"+ date.getTime();
					
					
		me.setState({
			"regionReqObj" : [],						
			"isLoading" : true
		});
					
		jQuery.get(url,function(response){						
			me.setState({
				"regionReqObj" : response,
				"isLoading" : false
			});
		}).fail(function(error){
			console.log("error ",error);
		}).always(function(){
			console.log(" Get Reqion Info completed ");
		});
	}

	render (){
		if(this.state.isLoading === true){
			return (<div className='spinner-border' role='status'><span className='sr-only'>Loading...</span></div>);
		}else{
			return(
				<table className="table table-striped">	
					<caption>{this.props.name}</caption>
					<thead className="thead-light">								
						<tr>
							<th>Name</th>
							<th>Native Name</th>	
							<th>Region</th>		
							<th>Sub-Region</th>
							<th>Code</th>	
							<th>Capital</th>	
							<th>Demonym</th>
							<th>Languages</th>
							<th>Flag</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.regionReqObj.map(function(infoObj,index){										
								return (
									<tr key={infoObj["name"]}>
										<td>{infoObj["name"]}</td>
										<td>{infoObj["nativeName"]}</td>	
										<td>{infoObj["region"]}</td>	
										<td>{infoObj["subregion"]}</td>		
										<td>{infoObj["alpha2Code"]}</td>
										<td>{infoObj["capital"]}</td>																		
										<td>{infoObj["demonym"]}</td>
										<td>	
											<ul>
												{
																			
													infoObj.languages.map(function(langObj,j){
														return (
															<li key={langObj["name"]}>{langObj["name"]}</li>
														)
													})
												}
											</ul>
										</td>
										<td><img src={infoObj["flag"]} alt={infoObj["name"]} /></td>
									</tr>
								)
							})
						}
					</tbody>	
				</table>
			)
		}
				
	}
};