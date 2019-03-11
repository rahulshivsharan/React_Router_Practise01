import React from "react";
import {Link} from "react-router-dom";
import Repos from "./Repos";
import About from "./About";

export default class App extends React.Component{
	render(){
		return (
			<div>
				<p>Hello, React Router !!</p>
				<ul>
					<li>
						<Link to="/repos"><span>Repository</span></Link>
					</li>
					<li>
						<Link to="/about"><span>About Me</span></Link>
					</li>
				</ul>
			</div>
		)
	}
}