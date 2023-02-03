//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application in App root
let counter1 = 0;
function renderCounter1() {
    ReactDOM.render(
        <Counter count={counter1} />, 
        document.querySelector("#app")
    )
    counter1++;
}
setInterval(renderCounter1, 1000);


//render react application in Root root
let counter2 = 0;
function renderCounter2() {
    ReactDOM.render(
        <Counter count={counter2} />, 
        document.getElementById('root')
    )
    counter2++;
}
setInterval(renderCounter2, 500);