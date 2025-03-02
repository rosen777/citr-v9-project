const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  debugger;
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
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
