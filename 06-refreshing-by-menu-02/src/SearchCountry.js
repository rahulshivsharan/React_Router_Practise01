import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CountryInfo from "./CountryInfo";
import Autocomplete from "react-autocomplete";
import jQuery from "jQuery";

export default class SearchCountry extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"selectedCountry" : "",
			"countryList" : []
		}

		this.getCountryInfo = this.getCountryInfo.bind(this);		
		this.loadCountries = this.loadCountries.bind(this);
	}

	getCountryInfo(val){
		console.log(val);
		var currentPath = window.location.pathname;
    	//currentPath =  window.location.linkPath;
    	window.location.linkPath = currentPath + "/" + val;
    	console.log(window.location.linkPath);
		this.setState({
			"selectedCountry" : val
		});
	}

	loadCountries(e){
		//console.log(e.target.value);
		var url = "https://restcountries.eu/rest/v2/name/"+e.target.value;
		var me = this;
		if(e.target.value !== ""){
			jQuery.get(url,function(response){						
				me.setState({
					"countryList" : response				
				});
			}).fail(function(error){
				console.log("error ",error);
			}).always(function(){
				console.log(" Get Country List is completed ");
			});

			this.setState({
				"selectedCountry" : e.target.value
			});	
		}else{
			me.setState({
				"countryList" : [],
				"selectedCountry" : ""				
			});
		}
		
	}

	render(){
		return (
			<BrowserRouter>
				<div className="row">
					<div className="col-md-4">
						<form id="countrySearchForm">
							<div className="form-group row">
								<label htmlFor="countryNameTxt" className="col-sm-2 col-form-label">Search</label>
								<div className="col-md-12">									
									<Autocomplete className="form-control"	getItemValue={(item) => item.name}
													items={this.state.countryList} 
													renderItem={(item,isHighlighted) => 
														<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      														{item.name}
    													</div>
													}
													value={this.state.selectedCountry}
													onChange={this.loadCountries} 
													onSelect={this.getCountryInfo} /> 
								</div>								
							</div>
						</form>
					</div>
					<div className="col-md-8">
						<Route exact path="/WorldInfo/searchcountry/:countryCode" component={CountryInfo} />
					</div>
				</div>
			</BrowserRouter>
		)
	}
}