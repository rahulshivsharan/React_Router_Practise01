import React from "react";
import ReactDOM from "react-dom";

export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		this.routeMe = this.routeMe.bind(this);
	}

	routeMe(e){		
		var url = "/" + e.target.value;
		url = url.trim();
		//console.log(url);
		if(url !== "/select"){
			this.props.history.push(url);	
		}else{
			this.props.history.push("");	
		}		
	}
	render(){
		return (
			<select className="form-control" id="pageIndicator" onChange={this.routeMe}>
					<option value="select">Select</option>
					<option value="first-page">First Page</option>
					<option value="second-page">Second Page</option>
					<option value="third-page">Third Page</option>
			</select>
		)
	}
}