import React from "react";

import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function ItemList(props) {
  const { title, itemCards, imageId } = props.card?.card?.card;
  console.log(imageId);
  return (
    <div className=" border-b-2 border-gray-500">
      <>
        {/* Recommended & Level 1 Headings */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => handleClick()}
        >
          <div
            className="font-bold uppercase  py-4 text-start "
            //   onClick={() => setOpenSection(!openSection)}
          >
            {itemCards && itemCards?.length > 0
              ? `${title} (${itemCards.length})`
              : title}{" "}
          </div>
          <FaAngleDown />
        </div>
        {/* Recommended and Level 1 Heading's children */}
        {itemCards?.map((item, index) => {
          const { name, price, description, ribbon } = item?.card?.info;

          return (
            <section key={index} className=" px-5 py-4 w-full  text-sm">
              {ribbon?.text && (
                <div className="flex gap-2 items-center text-yellow-500">
                  <FaStar className="text-xs" />
                  <h1 className="text-yellow-600 font-bold"> {ribbon?.text}</h1>
                </div>
              )}
              <h1> {name}</h1>
              <h1> Rs {price / 100}</h1>
              <p className="text-gray-500 my-2 pb-3 border-b-2 border-gray-200 ">
                {" "}
                {description}
              </p>
              <button className="bg-slate-500 text-white px-5 py-2 rounded-md">
                {" "}
                Add to cart{" "}
              </button>
            </section>
          );
        })}{" "}
      </>
    </div>
  );
}
