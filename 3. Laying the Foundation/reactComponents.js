import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const heading = (
    <h3 className="element"> Hello world</h3>
)

// React Component
// 1. Class based components - Old way of writing code



// This is a short hand syntax of writing array functions with single line of code
// const fn = () => true;

// This is just another way of writing same function above
// const fn1 = () => {return true;}

// 2. Functional components - New way of writing code
// It is just a normal JavaScript function
// If a function is returning a react element then it can be called a functional component.
const Title = () => {
    return (
        <h1 className="title">This is my title component</h1>
    )
}

// Component Composition - Putting a component inside of another component
// Inside the {} -> You can run any piece of JS code
const Heading = () => {
    return (
        <div id="container">
            {Title()}
            {heading}
            {100 + 300}
            {console.log("hi")}
            <Title/>
            <h2 className="heading"> Heading component 1 </h2>
        </div>
    );
}

// This is just another way of writing the functional component
// const Heading1 = () => <h1 className="heading"> Heading component 2 </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)