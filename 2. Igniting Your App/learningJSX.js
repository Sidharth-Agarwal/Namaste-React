import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates an object => Render on DOM => HTML Element
const heading = React.createElement("h1", {id:"heading"}, "Sidharth is here...!");

// JSX - HTML-like or XML-like syntax in JavaScript
const jsxHeading = <h1 className="head">Hello world from JSX...!</h1>;
// The JS engine will not understand the above line because JS engine only understands ECMA Script.
// So what happens is - Even before this code goes to the JS Engine is it transpiled
// Then, JS Engine receives a code which the browsers can understands
// This transpilation of code is done with the help of Parcel
// However, parcel doesn't do the process by itself. It is done with the help of a package called "Babel"

// Another piece of information - 
// The flow of the rendering a JSX file onto the browser goes in the following steps :
// The JSX is transpiled into a React.createElement
// This React.createElement create a ReactElement which is JS Object
// This is then finally rendered into a HTML element
// JSX -> React.createElement -> ReactElement - JS Object -> HTML Element(render)

// const jsxHeading = (<h1 className="head">
//     Hello world from JSX...!
//     </h1>);
// When we want to write JSX in multiple lines we have to wrap it in brackets
// This is done so that Babel can understand the starting and ending of JSX

console.log(heading);
console.log(jsxHeading);
// These two object are exactly similar

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);