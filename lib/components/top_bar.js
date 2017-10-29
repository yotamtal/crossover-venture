import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	render() {
		return React.createElement(
			"div",
			{ className: "top-bar" },
			React.createElement(
				"nav",
				null,
				React.createElement(
					NavLink,
					{ exact: true, to: "/" },
					"Crossover Venture"
				)
			)
		);
	}
}