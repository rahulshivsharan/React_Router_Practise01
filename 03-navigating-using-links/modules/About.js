import React from "react";
import {Link} from "react-router-dom";
import Repos from "./Repos";

export default class About extends React.Component{
	render(){
		return (
			<div>
				<p>About to be !!</p>
				<ul>
					<li>
						<Link to="/"><span>Main Page</span></Link>
					</li>
					<li>
						<Link to="/repos"><span>Repository</span></Link>
					</li>
				</ul>
			</div>
		)		
	}
}