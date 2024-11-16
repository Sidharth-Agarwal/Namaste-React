import React from "react"
import ReactDOM from "react-dom/client"

// React.createElement => JavaScript Object => HTMLElement(render)

// Creating a React Element
// This is creating react element using Core React
// --------------------------------------------------------------------------------------
// const heading = React.createElement("h1", {id:"heading"}, "Hello from React Element!")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// JSX - HTML-like or XML-like syntax
// This is creating react element using JSX
// ---------------------------------------------------------------
const jsxHeading = <h1 id="heading"> Hello World from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)