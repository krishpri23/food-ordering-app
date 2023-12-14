import React, { useState } from "react";
import CategoryBody from "./CategoryBody";

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

/*
 This component is the most confusing part of the website.

 - cards
  - itemCards - list of food items 
    - categories (not available on every object)
      - itemCards - list of food items


 cards[0] inside REGULAR has basic info about restaurant not needed.
 cards[1] - Recommended details   
*/

function RestaurantCategory({ card }) {
  // State to isOpen/close accordian
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clciked");
  };

  const { title, itemCards } = card?.card?.card;
  return (
    <div className=" border-2 border-gray-50 px-3 bg-slate-50 ">
      {/* Recommended & Level 1 Headings */}
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => handleClick()}
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
  );
}

export default RestaurantCategory;
