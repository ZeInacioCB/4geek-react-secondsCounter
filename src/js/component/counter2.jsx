import React from "react";
import CounterCard2 from "./counterCard2.jsx";
import ClockCard from "./clockCard.jsx";

//create your first component
const Counter2 = (props) => {
	let count = String(props.count);	
	
	while (count.length < 6) {
        count = "0" + count;
    }
    
	return (
	<div className="container-fluid bg-black d-flex justify-content-center py-5">
		<ClockCard color={props.color} />
		<CounterCard2 counterDigit={count[0]} color={props.color} />
		<CounterCard2 counterDigit={count[1]} color={props.color} />
		<CounterCard2 counterDigit={count[2]} color={props.color} />
		<CounterCard2 counterDigit={count[3]} color={props.color} />
		<CounterCard2 counterDigit={count[4]} color={props.color} />
		<CounterCard2 counterDigit={count[5]} color={props.color} />
	</div>)
};

export default Counter2;