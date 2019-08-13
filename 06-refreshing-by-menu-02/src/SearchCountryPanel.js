import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,withRouter} from "react-router-dom";
import CountryInfo from "./CountryInfo";
import SearchCountryInputBox from "./SearchCountryInputBox";
import jQuery from "jQuery";

var SearchInputBox = withRouter(SearchCountryInputBox);

export default class SearchCountryPanel extends React.Component{
	
	render(){
		return (
			<BrowserRouter>
				<div className="row">
					<div className="col-md-3">
						<form id="countrySearchForm">
							<div className="form-group row">
								<label htmlFor="countryNameTxt" className="col-sm-2 col-form-label">Search</label>
								<div className="col-md-12">									
									<SearchInputBox />
								</div>								
							</div>
						</form>
					</div>
					<div className="col-md-9">
						<Route exact path="/WorldInfo/searchcountry/:countryCode" component={CountryInfo} />
					</div>
				</div>
			</BrowserRouter>
		)
	}
}