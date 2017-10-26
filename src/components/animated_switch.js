import React, { Component } from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

export default class AnimatedSwitch extends Switch {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
	}
	componentWillAppear(cb) {
		console.log("componentWillAppear");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			2500
		);
		cb();
	}
	componentWillEnter(cb) {
		console.log("componentWillEnter");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			2500
		);
		cb();
	}
	componentWillLeave(cb) {
		console.log("componentWillLeave");
		Animated.timing(this.state.animate, { toValue: 0, duration: 2000 }).start();
		setTimeout(() => cb(), 1500);
	}
	render() {
		const style = {
			opacity: Animated.template`${this.state.animate}`,
			perspective: 1000,
			transform: Animated.template`
				scale(${this.state.animate.interpolate({
					inputRange: [0, 1],
					outputRange: ["8" , "1"],
			})})
			`
		};
		return (
			<Animated.div style={style} className="animated-page-wrapper">
				{super.render()}
			</Animated.div>
		);
	}
};
