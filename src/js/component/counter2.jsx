import React from "react";
import CounterCard2 from "./counterCard2.jsx";
import ClockCard from "./clockCard.jsx";

//create your first component
const Counter2 = (props) => {
	let count = String(props.count);	
	
	while (count.length < 6) {
        count = "0" + count;
    }

	const counterCards = count.split('').map((digit) =>
		<CounterCard2 counterDigit={digit} color={props.color} />
	);
    
	return (
	<div className="container-fluid bg-black d-flex justify-content-center py-5">
		<ClockCard color={props.color} />
		{counterCards}
	</div>)
};

export default Counter2;