import React from "react";
import ReactDOM from "react-dom";
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
    	var me = this;
		me.setState({
			"selectedCountry" : val
		});
		var url = "/WorldInfo/searchcountry/"+val;
		me.props.history.push(url);
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
			<Autocomplete 	className="form-control"	
							getItemValue={(item) => item.alpha2Code}
							items={this.state.countryList} 
							renderItem={(item,isHighlighted) => 
								<div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.alpha2Code}>
      								{item.name}
    							</div>
							}
							value={this.state.selectedCountry}
							onChange={this.loadCountries} 
							onSelect={this.getCountryInfo} /> 
			
		)
	}
}