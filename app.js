import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "h1",
      {
        id: "heading",
      },
      "Hello world from react"
    ),
    React.createElement(
      "h2",
      {
        id: "heading",
      },
      "Hello world from react h2"
    ),
  ]
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello world from react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
