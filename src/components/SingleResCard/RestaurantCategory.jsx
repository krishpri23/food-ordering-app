import React, { useState } from "react";
import CategoryBody from "./CategoryBody";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

/*
 This is a restaurant category component that shows accordion
*/

function RestaurantCategory({ card, isOpen, handleClick, index }) {
  const { title, itemCards } = card?.card?.card;
  return (
    <section className="flex flex-col gap-5 w-full my-5">
      <div className=" border-2 border-gray-50 px-3 bg-slate-50">
        {/* Recommended & Level 1 Headings */}
        <div
          className="flex justify-between items-center cursor-pointer "
          onClick={() => handleClick(index)}
        >
          <div className="font-bold uppercase  py-4 text-start ">
            {itemCards && itemCards?.length > 0
              ? `${title} (${itemCards.length})`
              : title}{" "}
          </div>
          {isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </div>

        {isOpen && <CategoryBody itemCards={itemCards} />}
      </div>
    </section>
  );
}

export default RestaurantCategory;
