const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React...!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// The react elements gives us an object
// Props are children and the attributes the we pass in
console.log(heading);

// use of - root.render(heading)
// in the root.render() we are passing a react element
// the main job of the root.render() function is to take the object created using react
// convert it in a form that can be understood by the browser i.e. in tags

// the flow of the above is 
/*
1. We create an object using the createElement in react
2. After creating an element, an object is given by react in return
3. Extracted the root element using the ReactDOM
4. The browser can not understand the object given to us by react
5. For this, we used the .render() function that helped to convert the react obect into a form understandable by the browser
6. Then only the element is rendered on the browser
*/