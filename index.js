const helloDojo = React.createElement("div", null, React.createElement("h1",null, "Hello Dojo"),
    React.createElement("h3", null, "Things I need to do:"),
    React.createElement("ul", null, 
        React.createElement("li", null, "Learn React"),
        React.createElement("li", null, "Climb Mt.Everest"),
        React.createElement("li", null, "Run a marathon"),
        React.createElement("li", null, "Feed the dogs"),
    )
)
ReactDOM.render(helloDojo, document.getElementById("main"));