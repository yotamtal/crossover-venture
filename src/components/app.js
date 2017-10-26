import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects";
import ProjectItem from "./project_item";
import Missed from "./missed";
import Contact from "./contact";
import About from "./about";
import Gallery from "./gallery";

/***************
 * 
 * Tryout with 3D WebGL
 * 
 */

import Globe from "./globe";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
					projects: json.slice(0, 15)
				});
			});
	}
	render() {
		return (
			<div className="wrapper">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
				<TopBar />
				<Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/globe" component={Globe} />
								<Route exact path="/contact" component={Contact} />
								<Route
									exact
									path="/gallery"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/>
								<Route
								path="/gallery/:id"
								render={props => (
									<ProjectItem {...props} projects={this.state.projects} />
								)}
								/>
								<Route
									exact
									path="/shop"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/>
								<Route
								path="/shop/:id"
								render={props => (
									<ProjectItem {...props} projects={this.state.projects} />
								)}
								/>
								<Route
									exact
									path="/projects"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/>
								<Route
									path="/projects/:id"
									render={props => (
										<ProjectItem {...props} projects={this.state.projects} />
									)}
								/>
								<Route component={Missed} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}
