import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import cartSlice from "../utils/cartSlice";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  // subscribing to the cart items
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items", cartItems);
  return (
    <nav className="w-full bg-indigo-200 px-6 py-3">
      <ul className="flex w-full justify-end  gap-20 py-3 rounded-sm">
        <NavLink className="flex justify-center gap-3 items-center" to="/about">
          <span>
            {" "}
            <FaSearch />{" "}
          </span>
          <li> Search </li>
        </NavLink>
        <NavLink className="flex justify-center gap-3 items-center" to="/login">
          <span>
            <FaRegUserCircle />
          </span>
          <li> Sign In </li>
        </NavLink>
        <NavLink
          className="flex justify-center gap-3 items-center"
          to="/contact"
        >
          <span>
            {" "}
            <FaCartArrowDown />
          </span>
          <span>Cart ({cartItems.length}) </span>{" "}
        </NavLink>
      </ul>
    </nav>
  );
};
export default Header;
