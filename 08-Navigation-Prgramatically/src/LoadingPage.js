import React from "react";
import ReactDOM from "react-dom";

export default class LoadingPage extends React.Component{
	constructor(props){
		super(props);				
		this.state = {
			"pageParam" : ""
		}
		this.updateMyStateVariables = this.updateMyStateVariables.bind(this);
	}
	
	componentDidMount(){		
		var me = this;
		me.updateMyStateVariables();
	}

	componentDidUpdate(nextProps, prevState,snapshot){
		var me = this;
		if(me.props.match.params["routeParam"] !== nextProps.match.params["routeParam"]){
			me.updateMyStateVariables();	
		}
		
	}
	
	updateMyStateVariables(){
		var me = this;
		var val = me.props.match.params["routeParam"];		
		me.setState({
			"pageParam" :  (val === "first-page") ? "First Page Select" : "Second Page Selected"
		});		
	}

	render(){
		return (<h1>{this.state["pageParam"]}</h1>)
	}
}