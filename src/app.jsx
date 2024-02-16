import ReactDOM from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Navbar/Login";
import Home from "./components/Home";
import Cart from "./components/Navbar/Cart";
import Register from "./components/Navbar/Register";
import SearchRestaurant from "./components/Navbar/SearchRestaurant";
import DetailedSliderOption from "./components/home/DetailedSliderOption";
import RestaurantMenu from "./components/RestaurantMenu";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchRestaurant />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          <Route
            path="//collections/:itemName/:itemId"
            element={<DetailedSliderOption />}
          />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);
