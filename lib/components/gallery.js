import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			animations: []
		};
	}
	componentDidMount() {
		this._renderProjects(this.props.projects);
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProjects(nextProps.projects);
		}
	}
	_renderProjects(projects) {
		this.setState({
			projects: projects,
			animations: projects.map((_, i) => new Animated.Value(0))
		}, () => {
			Animated.stagger(100, this.state.animations.map(anim => Animated.spring(anim, { toValue: 1 }))).start();
		});
	}
	render() {
		return React.createElement(
			"div",
			{ className: "page projects" },
			React.createElement(
				"h1",
				null,
				"Projects"
			),
			React.createElement(
				TransitionGroup,
				{ component: "ul" },
				this.state.projects.map((p, i) => {
					const style = {
						opacity: this.state.animations[i],
						transform: Animated.template`
								translate3d(0,${this.state.animations[i].interpolate({
							inputRange: [0, 1],
							outputRange: ["12px", "0px"]
						})},0)
							`
					};
					return React.createElement(
						"li",
						{ key: i },
						React.createElement(
							Animated.div,
							{ style: style },
							React.createElement(
								Link,
								{ to: `/projects/${p.id}` },
								p.title
							)
						)
					);
				})
			)
		);
	}
}