//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application
let counter = 0;
function renderCounter() {
    ReactDOM.render(
        <Counter count={counter} />, 
        document.querySelector("#app")
    )
    counter++;
}

setInterval(renderCounter, 1000);