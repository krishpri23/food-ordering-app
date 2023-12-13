import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import ItemList from "./ItemList";

/*
 This component is the most confusing part of the website.

 - cards
  - itemCards - list of food items 
    - categories (not available on every object)
      - itemCards - list of food items

*/

function RestaurantCategory(props) {
  // Returns all the arrays of cards that hold different categories
  const { cards } = props?.resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  const { veg } = props?.resInfo.cards[0]?.card?.card?.info;

  // State to open/close accordian
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  console.log("these are cards obj", cards);
  return (
    <section className=" w-full">
      <h1 className="w-full font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>

      {cards.map((card, index) => {
        const { title, itemCards, categories } = card?.card?.card;
        console.log(`Item cards of index ${index} `, itemCards);
        console.log(`Categories : `, categories);

        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section className="flex flex-col gap-5 w-full my-5 " key={index}>
              <div className=" border-b-2 border-gray-500">
                <>
                  {/* Recommended & Level 1 Headings */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleClick()}
                  >
                    <div className="font-bold uppercase  py-4 text-start ">
                      {itemCards && itemCards?.length > 0
                        ? `${title} (${itemCards.length})`
                        : title}{" "}
                    </div>
                    <FaAngleDown />
                  </div>

                  {/* Recommended and Level 1 Heading's children */}
                  {open &&
                    itemCards?.map((item, index) => {
                      const { name, price, description, ribbon } =
                        item?.card?.info;

                      return (
                        <section
                          key={index}
                          className=" px-4 py-4 w-full flex justify-between items-center text-sm "
                        >
                          <div className="flex flex-col w-3/4">
                            {ribbon?.text && (
                              <div className="flex gap-2 items-center text-yellow-500">
                                <FaStar className="text-xs" />
                                <h1 className="text-yellow-600 font-bold">
                                  {" "}
                                  {ribbon?.text}
                                </h1>
                              </div>
                            )}
                            <h1> {name}</h1>
                            <h1> Rs {price / 100}</h1>
                            <p className="text-gray-500 my-2 pb-3 border-b-2 border-gray-200 ">
                              {" "}
                              {description}
                            </p>
                          </div>

                          <button className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-5 py-2 rounded-md ">
                            {" "}
                            Add to cart{" "}
                          </button>
                        </section>
                      );
                    })}
                </>
              </div>
              {/* Available only for few cards not on all cards */}
              {categories?.map((card, index) => {
                const { title, itemCards } = card;
                console.log(card);
                console.log("categories item length ", itemCards);
                return (
                  <div key={index} className="border-b-2 pb-3">
                    {itemCards.length > 0 && (
                      <>
                        {/* Accordian - Category Heading Level 2*/}
                        <div
                          className="flex justify-between cursor-pointer"
                          onClick={() => handleClick()}
                        >
                          <h1 className="font-bold uppercase">
                            {title} ({itemCards.length})
                          </h1>

                          <FaAngleDown />
                        </div>

                        {/* Category's (CLASSIC WRAP) heading's (VEG WRAPS) children (4 TYPES OF VEG WRAPS) has a list of items */}
                        {open &&
                          itemCards?.map((card, index) => {
                            const { name, price, description } =
                              card?.card?.info;

                            return (
                              <div
                                key={index}
                                className="flex justify-between items-center "
                              >
                                <div className="flex flex-col  px-3 py-4 w-3/4 text-sm">
                                  <h1>{name} </h1>
                                  <h1>Rs {price / 100}</h1>
                                  <p className="text-gray-500">{description}</p>
                                </div>

                                <button className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-5 py-2 rounded-md ">
                                  {" "}
                                  Add to cart{" "}
                                </button>

                                <hr className="mt-6" />
                              </div>
                            );
                          })}
                      </>
                    )}
                  </div>
                );
              })}
            </section>
          );
        }
      })}
    </section>
  );
}

export default RestaurantCategory;
