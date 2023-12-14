import React from "react";
import { FaStar } from "react-icons/fa";

export default function CategoryBody({ item }) {
  const { name, price, description, ribbon, id } = item?.card?.info;

  return (
    <>
      {/* Recommended and Level 1 Heading's children */}
      <div className="flex flex-col w-3/4">
        {ribbon?.text && (
          <div className="flex gap-2 items-center text-yellow-500">
            <FaStar className="text-xs" />
            <h1 className="text-yellow-600 font-bold"> {ribbon?.text}</h1>
          </div>
        )}
        <h1> {name}</h1>
        <h1> Rs {price / 100}</h1>
        <p className="text-gray-500 my-2 pb-3  "> {description}</p>
      </div>
      <div>
        <button className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-5 py-2 rounded-md ">
          {" "}
          Add to cart{" "}
        </button>
      </div>
    </>
  );
}
