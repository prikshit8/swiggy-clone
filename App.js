import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste JSX</h1>;
const number = 10000;
// React Functional Components
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title /> {number}
      <Title></Title>
      {Title()}
      {/* component composition, using component inside other component*/}
      {/* {write any JS inside {} braces} */}
      <h1 className="heading">Namaste React functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
