import React from "react";
import {Link} from "react-router-dom";
import About from "./About";

export default class Repos extends React.Component{
	render(){
		return (
			<div>
				<p>Repos rendered !!!</p>
				<ul>
					<li>
						<Link to="/"><span>Main Page</span></Link>
					</li>
					<li>
						<Link to="/about"><span>About Me</span></Link>
					</li>
				</ul>
			</div>
		)
	}
}