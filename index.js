import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
// React Element
const jsxHeading = <h2 id="heading" tabIndex="5">Hello World</h2>;
const heading = (
    <h1 className="head" tabIndex="5">Hello World</h1>
);

// React Component
const HeadEl = () => {
    return <h1>This is Component from outside.</h1>
};

const message = "I am Darth Vader";
// Component COmposition
const HeadEl2 = () => (
    <>
        <h1>Hello World</h1>
        <h2>{message}</h2>
        <h3>{12 + 9 + 4}</h3>
        <HeadEl />
    </>
);


// root.render(jsxHeading);
root.render(<HeadEl2 />);
