const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello Divyanshu"),
        React.createElement("h2", { id: "smallHeading" }, "How are You")
        ]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello Divyanshu"),
        React.createElement("h2", { id: "smallHeading" }, "How are You")
        ])]);


// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(parent);
console.log(parent);