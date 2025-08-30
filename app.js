import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutUs from "./src/components/AboutUs.js";  
import ContactUs from "./src/components/ContactUs.js";  
import Cart from "./src/components/Cart.js";
import ResturentMenue from "./src/components/ResturentMenue.js";

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
      <Outlet />
      <h1>Welcome to React</h1>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <h1>Oops! Something went wrong in Body</h1>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
        errorElement: <h1>Oops! Something went wrong in About Us</h1>,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
        errorElement: <h1>Oops! Something went wrong in Contact Us</h1>,
      },
      {
        path: "/Cart",
        element: <Cart />,
        errorElement: <h1>Oops! Something went wrong in Cart</h1>,
      },
      {
        path: "/restaurants/:resId",
        element: <ResturentMenue />,
        errorElement: <h1>Oops! Something went wrong in ResturentMenue</h1>,
      }
      
    ],
    errorElement: <h1>Oops! Something went wrong</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
