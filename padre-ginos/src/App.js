import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano pizza",
      description: "French fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and pizza",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "chicken nuggies on your pizza",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "gouda cheese on your pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
