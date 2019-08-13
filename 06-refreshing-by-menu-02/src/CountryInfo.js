import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jQuery";

export default class CountryInfo extends React.Component{
	constructor(props){		
		super(props);
		var me = this;
		me.state = {
			"countryReqObj" : null,
			"countryCode" : me.props.match.params.countryCode,
			"isLoading" : true
		}
		this.getCountryInfo = this.getCountryInfo.bind(this);
	}

	componentDidMount(){
		this.getCountryInfo(this.state.countryCode)
	}

	componentDidUpdate(nextProps, prevState,snapshot){	
		if(this.props.match.params.countryCode !== nextProps.match.params.countryCode){
			this.getCountryInfo(this.props.match.params.countryCode);	
		}
	}

	getCountryInfo(selectedCountryCode){
		var url = "https://restcountries.eu/rest/v2/alpha/" + selectedCountryCode,
			date = new Date(),
			me = this;
		
		url += "?date"+ date.getTime();
			
		console.log("Loading counter Info ",date.getTime());			
		me.setState({
			"countryReqObj" : null,						
			"isLoading" : true
		});
					
		jQuery.get(url,function(response){						
			me.setState({
				"countryReqObj" : response,
				"isLoading" : false
			});
		}).fail(function(error){
			console.log("error ",error);
		}).always(function(){
			console.log(" Get Country Info completed ");
		});
	}

	render (){
		if(this.state.isLoading === true){
			return (
				<div className='spinner-border' role='status'><span className='sr-only'>Loading...</span></div>
			)
		}else{
			return(
				<table className="table">
					<tbody>
						<tr>
							<td align="right">Name</td>
							<td><b>{this.state.countryReqObj["name"]}</b></td>
						</tr>
						<tr>
							<td align="right">Capital</td>
							<td><b>{this.state.countryReqObj["capital"]}</b></td>
						</tr>
						<tr>
							<td align="right">Region</td>
							<td><b>{this.state.countryReqObj["region"]}</b></td>
						</tr>
						<tr>
							<td align="right">Sub-Region</td>
							<td><b>{this.state.countryReqObj["subregion"]}</b></td>
						</tr>
						<tr>
							<td align="right">Population</td>
							<td><b>{this.state.countryReqObj["population"]}</b></td>
						</tr>
						<tr>
							<td align="right">Native-Name</td>
							<td><b>{this.state.countryReqObj["nativeName"]}</b></td>
						</tr>
						<tr>
							<td colSpan="2" align="center">
								<img src={this.state.countryReqObj["flag"]} alt={this.state.countryReqObj["name"]} />
							</td>						
						</tr>
					</tbody>
				</table>
			);	
		}
		
	}	
}