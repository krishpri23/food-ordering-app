import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function CategoryHeading({ card, isOpen, handleClick }) {
  const { title, itemCards } = card?.card?.card;
  return (
    <div
      className="flex justify-between items-center cursor-pointer "
      onClick={handleClick}
    >
      <div className="font-bold uppercase  py-4 text-start ">
        {itemCards && itemCards?.length > 0
          ? `${title} (${itemCards.length})`
          : title}{" "}
      </div>
      {isOpen ? <FaAngleDown /> : <FaAngleUp />}
    </div>
  );
}
