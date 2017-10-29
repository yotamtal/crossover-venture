var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

// import Globe from "./globe";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
			return response.json();
		}).then(json => {
			this.setState({
				projects: json.slice(0, 15)
			});
		});
	}
	render() {
		return React.createElement(
			"div",
			{ className: "wrapper" },
			React.createElement("div", { id: "stars" }),
			React.createElement("div", { id: "stars2" }),
			React.createElement("div", { id: "stars3" }),
			React.createElement(TopBar, null),
			React.createElement(Route, {
				render: ({ location }) => React.createElement(
					TransitionGroup,
					{ component: "main" },
					React.createElement(
						AnimatedSwitch,
						{
							key: location.key,
							location: location
						},
						React.createElement(Route, { exact: true, path: "/", component: Home }),
						React.createElement(Route, { exact: true, path: "/about", component: About }),
						React.createElement(Route, { exact: true, path: "/globe", component: Globe }),
						React.createElement(Route, { exact: true, path: "/contact", component: Contact }),
						React.createElement(Route, {
							exact: true,
							path: "/gallery",
							render: props => React.createElement(Projects, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, {
							path: "/gallery/:id",
							render: props => React.createElement(ProjectItem, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, {
							exact: true,
							path: "/shop",
							render: props => React.createElement(Projects, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, {
							path: "/shop/:id",
							render: props => React.createElement(ProjectItem, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, {
							exact: true,
							path: "/projects",
							render: props => React.createElement(Projects, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, {
							path: "/projects/:id",
							render: props => React.createElement(ProjectItem, _extends({}, props, { projects: this.state.projects }))
						}),
						React.createElement(Route, { component: Missed })
					)
				)
			})
		);
	}
}