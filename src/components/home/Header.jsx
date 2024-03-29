import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import cartSlice from "../../utils/cartSlice";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { useCartContext } from "../../context/CartContext";

const Header = () => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("register")));
    console.log(login);
  }, []);

  const handleLogout = () => {
    return;
  };
  // subscribing to the cart items
  // const cartItems = useSelector((store) => store.cart.items);
  // console.log("cart items", cartItems);

  const { state } = useCartContext();
  console.log("state inside header", state?.cart?.length);

  return (
    <nav className="w-full flex justify-between bg-indigo-200 px-6 py-3">
      <NavLink
        to="/"
        className="w-full flex justify-start items-center font-bold text-orange-700"
      >
        Foodie Delivery
      </NavLink>
      <ul className="flex w-full justify-end  gap-20 py-3 rounded-sm">
        <NavLink
          className="flex justify-center gap-3 items-center"
          to="/search"
        >
          <span>
            {" "}
            <FaSearch />{" "}
          </span>
          <li> Search </li>
        </NavLink>
        {login ? (
          <Link
            to="/profile"
            className="flex justify-center items-center gap-3"
          >
            <span>
              <RxAvatar />{" "}
            </span>
            <span className="text-black"> {login.name} </span>
          </Link>
        ) : (
          <NavLink
            className="flex justify-center gap-3 items-center"
            to="/login"
          >
            <span>
              <FaRegUserCircle />
            </span>
            <li> Sign In </li>
          </NavLink>
        )}

        {login && (
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-800 px-4 py-2 rounded-lg text-white "
          >
            {" "}
            Logout{" "}
          </button>
        )}

        <NavLink className="flex justify-center gap-1 items-center" to="/cart">
          <span>
            {" "}
            <FaCartArrowDown />
          </span>
          <span> {state?.cart?.length} () </span>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Header;
