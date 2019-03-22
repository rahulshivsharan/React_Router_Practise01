import React from "react";
import {Typeahead} from 'react-bootstrap-typeahead';

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			"data" : ["Rahul","Ronit","Ravi","Rohit","Rafique","Rajesh","Rahim","Raju","Rajendra","Ritvik","Rimjhim","Riyan","Rehan","Rajdeep","Radhakirshna"],
			"selectedName" : ""
		}

		this.filterData = this.filterData.bind(this);
	}

	filterData(selected){
		//console.log("Data "+selected);
		this.setState({
			"selectedName" : selected
		})
		return selected;
	}

	render(){
		return( 
			<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Typeahead id="autocomplete01" onChange={this.filterData} options={this.state.data} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<span id="texthighlighter">{this.state.selectedName}</span>
						</div>
					</div>	
			</div> 
		)			
	}
}