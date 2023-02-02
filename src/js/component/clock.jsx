import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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
        fontSize: "6rem",
        verticalAlign: "middle"
    }
}

//create your first component
const ClockCard = () => {
	return (
    <div className="card bg-black m-1" style={cardStyle.container}>
        <div className="card-body text-white border rounded-3" style={cardStyle.content}>
            <FontAwesomeIcon className="text-white" style={cardStyle.title} icon={faClock} />
        </div>
    </div>
    );
};

export default ClockCard;