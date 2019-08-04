import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jQuery";

export default class CountryInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"countryReqObj" : null,
			"countryCode" : ""
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
					<tr>
						<td align="right">Name</td>
						<td>{this.state.countryReqObj["name"]}</td>
					</tr>
					<tr>
						<td align="right">Capital</td>
						<td>{this.state.countryReqObj["capital"]}</td>
					</tr>
					<tr>
						<td align="right">Region</td>
						<td>{this.state.countryReqObj["region"]}</td>
					</tr>
					<tr>
						<td align="right">Sub-Region</td>
						<td>{this.state.countryReqObj["subregion"]}</td>
					</tr>
					<tr>
						<td align="right">Population</td>
						<td>{this.state.countryReqObj["population"]}</td>
					</tr>
					<tr>
						<td align="right">Native-Name</td>
						<td>{this.state.countryReqObj["nativeName"]}</td>
					</tr>
					<tr>
						<td colspan="2">
							<img src={this.state.countryReqObj["flag"]} alt={this.state.countryReqObj["name"]} />
						</td>						
					</tr>
				</table>
			);	
		}
		
	}	
}