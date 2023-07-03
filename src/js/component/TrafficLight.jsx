import React from "react";

export default function TrafficLight  (props) {
	const {trafficLightColor, activeColor, } = props;
	
	const isActive = activeColor === trafficLightColor ? 'active-traffic-light' : '';
	
	return (
		<div className={`
		 traffic-light
		 ${trafficLightColor}
		 ${isActive}`}>

		</div>
	);
};




