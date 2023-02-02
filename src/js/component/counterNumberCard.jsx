import React from "react";

const cardStyle = {
    container: {
        padding: "1px"
    },
    content: {
        color: "white",
        background: "darkslategrey",
        padding: "2rem"
    },
    title: {
        fontSize: "6rem"
    }
}

//create your first component
const CounterCard = (props) => {
	return (
		<div className="card bg-black m-1" style={cardStyle.container}>
            <div className="card-body border rounded-3" style={cardStyle.content}>
                <h5 className="card-title" style={cardStyle.title}>{props.counter}</h5>
            </div>
        </div>
	);
};

export default CounterCard;