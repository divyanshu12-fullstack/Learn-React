import React from "react";
import { createRoot } from "react-dom/client";

// Creating a parent div with two child divs, each containing headings
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child-1", key: "child-1" }, [
        React.createElement("h1", { id: "heading-1", key: "heading-1" }, "Hello Divyanshu"),
        React.createElement("h2", { id: "smallHeading-1", key: "smallHeading-1" }, "How are You")
    ]),
    React.createElement("div", { id: "child-2", key: "child-2" }, [
        React.createElement("h1", { id: "heading-2", key: "heading-2" }, "Hello Divyanshu"),
        React.createElement("h2", { id: "smallHeading-2", key: "smallHeading-2" }, "How are You")
    ])
]);

// Selecting the root element and rendering the parent component
const root = createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent); 