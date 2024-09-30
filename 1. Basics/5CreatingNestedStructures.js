// Creating this structure using React.createElement

/* <div id="parent">
    <div id="child">
        <h1 class="sibling">I'm h1 Tag</h1>
        <h2 class="sibling">I'm h2 Tag</h2>
    </div>
</div> */

const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [
            React.createElement("h1", {class:"sibiling"}, "I'm h1 Tag"),
            React.createElement("h2", {class:"sibiling"}, "I'm h2 Tag")
        ]
    )
)

root.render(parent)