// Our main aim is to create a structure like this

/*
<div id="parent">
    <div id="child2">
        <h1>I'm the main H1 tag</h1>
        <h2>I'm the main H2 tag</h2>
    </div>
    <div id="child1">
        <h1>I'm the main H1 tag</h1>
        <h2>I'm the main H2 tag</h2>
    </div>
</div>
*/

// When we have to create sibling in a tag
// We have to make an array in the third argument of the createElement function
// Then we have to define all the children of the parent individually in the array

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {}, "I'm the main H1 tag"),
        React.createElement("h2", {}, "I'm the main H2 tag")
    ]),React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "I'm the main H1 tag"),
        React.createElement("h2", {}, "I'm the main H2 tag")
    ])
]);

// The code all throw an error in the console for the missing "key"

// This is a very tedious and difficult to-read way of writing react in JS
// For that "JSX" was introduced
// The "JSX" thing will be discuss in further lectures

// const parent = React.createElement("", {}, "")
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);