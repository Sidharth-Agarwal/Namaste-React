import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
    <h1 className="head" tabIndex="1">
        Hello world from JSX...!
    </h1>
);

// React Components
// Everything in react is a component

// React Functional Component -
// (Always name a component in capital letters)
// A component is nothing but a piece of code which return a piece of JSX
// So, basically a function which returns a react element is a functional component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading"> Namaste React Functional Component </h1>
    </div>
);

// This can also be written as - 
// 1.
// const HeadingComponent = () => <h1> Namaste React Functional Component </h1>;
// 2.
// const HeadingComponent = () => {
//     return <h1> Namaste React Functional Component </h1>;
// }

// These two functions are same -
// 1.
// const fn = () => true;
// 2.
// const fn2 = () => {
//     return true;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// Rendering a component on the browser
console.log(HeadingComponent);
root.render(<HeadingComponent/>)