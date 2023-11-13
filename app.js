import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "namaste react");

// JSX is not HTML in js
// it's html-like or XML-like syntax & it's not pure js
// and browser will not understand it
// jsxHeading is equivalent to heading
// JSX is transpiled into React object before it reaches the JS Engine - it's done by PARCEL
// using Babel (it's a JS Package installed with PARCEL)

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">namaste react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
