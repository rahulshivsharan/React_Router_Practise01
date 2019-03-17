import React from "react";
import {Link,Route,BrowserRouter} from "react-router-dom";
import jQuery from 'jquery'; 

export default class Country extends React.Component{	
	constructor(props){
		super(props);
		this.state = {
			"countryName" : this.props.match.params.country,
			"countryInfo" : [],
			"isLoaded" : false
		}

		this.getCountryInfo = this.getCountryInfo.bind(this);		
	}

	getCountryInfo(){
		var date = new Date();
		var selected_country = this.props.match.params.country;
		var url = "https://restcountries.eu/rest/v2/region/"+selected_country+"?date="+date.getTime();
		var obj = this;
		
		this.setState({
			"isLoaded" : false
		});

		jQuery.ajax({
			"url" : url,
			"datatype" : "json",
			"type" : "GET",
			success : function(response){
				
				obj.setState({
					"countryName" : selected_country,
					"countryInfo" : response,
					"isLoaded" : true
				})
			},
			error : function(error){
				console.log("ERROR ",error);
			}
		});
	}

	/*
		This lifecycle method is called 
		when the component is rendered first 
	*/
	componentDidMount(){							
		this.getCountryInfo();
	}

	/*
		This lifecycle method is called when this component
		is updated or re-rendered
	*/
	componentDidUpdate(nextProps, prevState,snapshot){				
			/*
			console.log("This-Props ",this.props);
			console.log("Next-Prop ",nextProps);
			console.log("This-State ",this.state);
			console.log("prev-State ",prevState);
			*/
			if(this.props.match.params.country !== nextProps.match.params.country){
				this.getCountryInfo();	
			}
			
	}
	
	render(){		
		if(this.state.isLoaded === false){
			return <img alt="Ajax Loader" align="middle" src="/assets/ajax-loader.gif" />
		}else{
			return (<div className="panel panel-default">					
					<div className="panel-heading">
						<b>{this.props.match.params.country.toUpperCase()}</b>
					</div>
					<div className="table-wrapper-scroll-y my-custom-scrollbar  table-fixed">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Sub-Region</th>								
									<th>Capital</th>									
									<th>Native-Name</th>
									<th>Language</th>								
								</tr>
							</thead>
							<tbody>
								{
									this.state.countryInfo.map(function(countryObj,index){
										return (
											<tr key={index}>
												<td>{countryObj["name"]}</td>
												<td>{countryObj["subregion"]}</td>
												<td>{countryObj["capital"]}</td>												
												<td>{countryObj["nativeName"]}</td>
												<td>{countryObj.languages[0]["nativeName"]}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>					
				</div>);	
		}
			
	} // end of render
}
