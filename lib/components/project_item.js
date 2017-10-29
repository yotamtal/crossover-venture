import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {},
			animate: new Animated.Value(0)
		};
	}
	componentDidMount() {
		if (this.props.projects.length) {
			this._renderProject(this.props.projects);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProject(nextProps.projects);
		}
	}
	_renderProject(projects) {
		let project = projects.filter(p => {
			return p.id = this.props.match.params.id;
		});
		if (project.length) {
			this.setState({ project: project[0] });
			setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 375);
		}
	}
	render() {
		const { project: { title, body } } = this.state;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
		};
		return React.createElement(
			"div",
			{ className: "page project-item" },
			React.createElement(
				Animated.span,
				{ style: goBackStyle, className: "goBack" },
				React.createElement(
					"a",
					{
						onClick: e => {
							e.preventDefault();
							this.props.history.goBack();
						}
					},
					"\u2190"
				)
			),
			React.createElement(
				"h1",
				null,
				title && title
			),
			React.createElement(
				"p",
				null,
				body && body
			)
		);
	}
}