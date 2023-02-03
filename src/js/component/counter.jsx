import React from "react";
import CounterCard from "./counterNumberCard.jsx";
import ClockCard from "./clockCard.jsx";

//create your first component
const Counter = (props) => {
	let count = String(props.count);
	let digit1, digit2, digit3, digit4, digit5, digit6;

	if (count.length == 1) {
		digit1 = '0';
		digit2 = '0';
		digit3 = '0';
		digit4 = '0';
		digit5 = '0';
		digit6 = count[0];
	} else if (count.length == 2) {
		digit1 = '0';
		digit2 = '0';
		digit3 = '0';
		digit4 = '0';
		digit5 = count[0];
		digit6 = count[1];
	} else if (count.length == 3) {
		digit1 = '0';
		digit2 = '0';
		digit3 = '0';
		digit4 = count[0];
		digit5 = count[1];
		digit6 = count[2];		
	} else if (count.length == 4) {
		digit1 = '0';
		digit2 = '0';
		digit3 = count[0];
		digit4 = count[1];
		digit5 = count[2];
		digit6 = count[3];			
	} else if (count.length == 5) {
		digit1 = '0';
		digit2 = count[0];
		digit3 = count[1];
		digit4 = count[2];
		digit5 = count[3];
		digit6 = count[4];	
	} else if (count.length == 6) {
		digit1 = count[0];
		digit2 = count[1];
		digit3 = count[2];
		digit4 = count[3];
		digit5 = count[4];
		digit6 = count[5];	
	}
	/*
	for (let i = 0; i <= 6; i++) {
		const element = array[i];
		
	}
	*/


	return (
	<div className="container-fluid bg-black d-flex justify-content-center py-5">
		<ClockCard />
		<CounterCard counter={digit1} />
		<CounterCard counter={digit2} />
		<CounterCard counter={digit3} />
		<CounterCard counter={digit4} />
		<CounterCard counter={digit5} />
		<CounterCard counter={digit6} />
	</div>)
};

export default Counter;
