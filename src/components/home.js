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
		return (
			<div className="page home">
				<img id="circle7" /*className="backMandalaLayer3"*/ src={require('../images/flourish-circle.svg')}  />
				<img id="circle6" /*className="backMandalaLayer2"*/ src={require('../images/flourish-circle.svg')}  />
				<img id="circle5" /*className="backMandalaLayer1"*/ src={require('../images/flourish-circle.svg')}  />
				<NavLink to="/shop">
				<img id="circle4" /*className="mandalaLayer4"*/ src={require('../images/shop2.svg')}  />
				</NavLink>
				<NavLink to="/about">
				<img id="circle3" /*className="mandalaLayer3"*/ src={require('../images/about2.svg')}  />
				</NavLink>
				<NavLink to="/gallery">
				<img id="circle2" /*className="mandalaLayer2"*/ src={require('../images/gallery2.svg')}  />
				</NavLink>
				<NavLink to="/contact">
				<img id="circle1" /*className="mandalaLayer1"*/ src={require('../images/contact3.svg')}  />
				</NavLink>
				{/*<img id="main-mars" className="" src={require('../images/mars.svg')} width="200px" height="200px" />*/}
				<div id="earth_div"></div>
			</div>
		);
	}
}
