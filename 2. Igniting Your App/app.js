import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates an object => Render on DOM => HTML Element
const heading = React.createElement("h1", {id:"heading"}, "Sidharth is here...!");

// JSX - HTML-like or XML-like syntax in JavaScript
const jsxHeading = <h1>Hello world from JSX...!</h1>

console.log(heading);
console.log(jsxHeading);
// These two object are exactly similar

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);