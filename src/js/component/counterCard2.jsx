import React from "react";

//create your first component
const CounterCard2 = (props) => {
	return (
		<div className="card bg-black m-1 custom-container">
            <div className="card-body border rounded-3 custom-content" style={{background: props.color}}>
                <h5 className="card-title custom-title">{props.counter}</h5>
            </div>
        </div>
	);
};

export default CounterCard2;