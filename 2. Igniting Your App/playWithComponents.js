import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element, </span>

const element = (
    <h1>
        {elem}
        Hi, how you doin'?
    </h1>
)

const Title = () => (
    <h1 className="head">
        Hello World...!
    </h1>
);

// JSX helps us in prevention of Cross Site Scripting
// const data = api.getData()

// In JSX we can write any JS expression by using {}
const number = 100;
const JSinJSX = () => (
    // <h2>{number}</h2>
    // <h2>{100+200}</h2>
    <h2>{console.log("abcdefghijklmnopqrstuvwxyz")}</h2>
);

// Rendering one Component into another Component
// This is done by putting the component like this - <Component/>

// Rendering an element inside of a Component
// This is done by putting normally using the {} inside the component
const HeadingComponent = () => (
    <div id="container">
        {element}
        <Title/>
        <Title></Title>
        {Title()}
        <JSinJSX/>
        <h1 className="heading"> Namaste React Functional Component </h1>
    </div>
);

// Components can be written is other ways like 
// 1.
// const HeadingComponent = () => (
//     <div id="container">
//         {element}
//         <Title></Title>
//         <JSinJSX/>
//         <h1 className="heading"> Namaste React Functional Component </h1>
//     </div>
// );

// 2.
// const HeadingComponent = () => (
//     <div id="container">
//         {element}
//         {Title()}
//         <JSinJSX/>
//         <h1 className="heading"> Namaste React Functional Component </h1>
//     </div>
// );

// We can put component inside element or make other wierd combinations
// const element = (
//     <h1>
//         {elem}
//         <HeadingComponent/>
//         Hi, how you doin'?
//     </h1>
// )
// This will create an infinite loop and the browser will freeze

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)