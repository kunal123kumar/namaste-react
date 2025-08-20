const heading = React.createElement(
  "h1",
  {id: "parent"},
  [
    React.createElement("span", {id: "child1"},[
      React.createElement("h1", {id: "child1heading"}, "Namseta React !"),
      React.createElement("h2", {id: "child1para"}, "Hello React ...")
    ]),
    React.createElement("h1", {id: "child2"}, "Namseta React 2 !"),
    React.createElement("h1", {id: "child3"}, "Hello React 2 !")
  ]
);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);
