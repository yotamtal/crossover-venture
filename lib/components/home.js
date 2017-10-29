import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {

	/*componentWillMount () {
 	const script = document.createElement("script");
 
 	script.src = "http://www.webglearth.com/v2/api.js";
 	script.async = true;
 
 	document.body.appendChild(script);
 		var earth;
 	function initialize() {
 	  earth = new WE.map('earth_div');
 	  earth.setView([46.8011, 8.2266], 3);
 	  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 		attribution: '© OpenStreetMap contributors'
 	  }).addTo(earth);
  
 	  // Start a simple rotation animation
 	  var before = null;
 	  requestAnimationFrame(function animate(now) {
 		  var c = earth.getPosition();
 		  var elapsed = before? now - before: 0;
 		  before = now;
 		  earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
 		  requestAnimationFrame(animate);
 	  });
 	}
 	initialize()
 }*/

	render() {
		return React.createElement(
			"div",
			{ className: "page home" },
			React.createElement("img", { id: "circle7" /*className="backMandalaLayer3"*/, src: require('../images/flourish-circle.svg') }),
			React.createElement("img", { id: "circle6" /*className="backMandalaLayer2"*/, src: require('../images/flourish-circle.svg') }),
			React.createElement("img", { id: "circle5" /*className="backMandalaLayer1"*/, src: require('../images/flourish-circle.svg') }),
			React.createElement(
				NavLink,
				{ to: "/shop" },
				React.createElement("img", { id: "circle4" /*className="mandalaLayer4"*/, src: require('../images/shop2.svg') })
			),
			React.createElement(
				NavLink,
				{ to: "/about" },
				React.createElement("img", { id: "circle3" /*className="mandalaLayer3"*/, src: require('../images/about2.svg') })
			),
			React.createElement(
				NavLink,
				{ to: "/gallery" },
				React.createElement("img", { id: "circle2" /*className="mandalaLayer2"*/, src: require('../images/gallery2.svg') })
			),
			React.createElement(
				NavLink,
				{ to: "/contact" },
				React.createElement("img", { id: "circle1" /*className="mandalaLayer1"*/, src: require('../images/contact3.svg') })
			),
			React.createElement("img", { id: "main-mars", className: "", src: require('../images/mars.svg'), width: "200px", height: "200px" })
		);
	}
}