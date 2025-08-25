import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header.js";
import Body from "./src/components/Body.js";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/" +
          props.imageId
        }
        alt="food"
        className="food-image"
      />
      <h2>{props.action?.text}</h2>
      <p>{props.accessibility?.altText}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <h1>Welcome to React</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout />);
