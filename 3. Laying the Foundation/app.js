import React from "react"
import ReactDOM from "react-dom/client"

<<<<<<< HEAD
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
=======
// Creating React element using React.createElement
// ---------------------------------------------------------------------------------
// const heading = React.createElement("h1", {id:"heading"}, "This is Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// JSX is HTML-like or XML-like Syntax
// Creating React Element using JSX
// JSX(transpilation - By Parcel using Babel) => React Element - JS Object => HTML Element(on render)
// --------------------------------------------------------------------------------------------------
const jsxHeading = <h1 id="heading"> Hello from JSX </h1>;
>>>>>>> e7a6324b4d241731cafc834c6f6f8c270642d98a
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)