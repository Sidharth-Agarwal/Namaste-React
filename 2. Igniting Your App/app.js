import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates an object => Render on DOM => HTML Element

const heading = React.createElement("h1", {id:"heading"}, "Sidharth is here...!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);