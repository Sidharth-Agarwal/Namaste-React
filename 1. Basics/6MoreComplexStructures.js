

/* <div id="parent">
    <div id="child1">
        <h1 class="sibling">I'm sibling 1 from child1</h1>
        <h2 class="sibling">I'm sibling 2 from child1</h2>
    </div>
    <div id="child2">
        <h1 class="sibling">I'm sibling 1 from child2</h1>
        <h2 class="sibling">I'm sibling 2 from child2</h2>
    </div>
</div> */

const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div", {id:"parent"} ,
    [
        "Hi from parent tag",
        React.createElement("div", {id:"child1"}, 
            [
                React.createElement("h1", {class:"sibling"}, "I'm sibling 1 from child1"),
                React.createElement("h2", {class:"sibling"}, "I'm sibling 2 from child1")
            ]
        ),
        React.createElement("div", {id:"child2"}, 
            [
                React.createElement("h1", {class:"sibling"}, "I'm sibling 1 from child2"),
                React.createElement("h2", {class:"sibling"}, "I'm sibling 2 from child2")                
            ]
        )
    ]
)

root.render(parent)