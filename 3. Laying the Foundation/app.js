import React from "react"
import ReactDOM from "react-dom/client"

// Creating React element using React.createElement
// ---------------------------------------------------------------------------------
// const heading = React.createElement("h1", {id:"heading"}, "This is Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// JSX is HTML-like or XML-like Syntax
// Creating React Element using JSX
// JSX(transpilation - By Parcel using Babel) => React Element - JS Object => HTML Element(on render)
// Transpilation - Conversion of the code from one language to another.
// --------------------------------------------------------------------------------------------------
const jsxHeading = (
    <h1 className="heading"> 
        Hello from JSX 
    </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)