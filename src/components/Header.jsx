import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import cartSlice from "../utils/cartSlice";

const Header = () => {
  // subscribing to the cart items
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items", cartItems);
  return (
    <nav className="w-full bg-indigo-200 flex flex-row justify-between items-center px-6">
      <ul className="flex w-full justify-center place-items-center  gap-10 py-3 rounded-sm">
        <NavLink to="/about">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/">
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact Us</li>{" "}
        </NavLink>
      </ul>
      <Link to="/cart" className="flex flex-row w-20 ">
        {" "}
        Cart {cartItems.length}{" "}
      </Link>
    </nav>
  );
};
export default Header;
