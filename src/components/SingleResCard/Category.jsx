import React, { useState } from "react";
import CategoryHeading from "./CategoryHeading";
import CategoryBody from "./CategoryBody";

/*
 This component is the most confusing part of the website.

 - cards
  - itemCards - list of food items 
    - categories (not available on every object)
      - itemCards - list of food items


 cards[0] inside REGULAR has basic info about restaurant not needed.
 cards[1] - Recommended details   
*/

function RestaurantCategory(props) {
  // Returns all the arrays of cards that hold different categories
  const { cards } = props?.resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  const { veg } = props?.resInfo.cards[0]?.card?.card?.info;

  // State to isOpen/close accordian
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log("these are cards obj", cards);
  return (
    <section className=" w-full">
      <h1 className="w-full font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>

      {cards.map((card, index) => {
        const { itemCards } = card?.card?.card;
        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section className="flex flex-col gap-5 w-full my-5 " key={index}>
              <div className=" border-b-2 border-gray-500">
                <>
                  {/* Recommended & Level 1 Headings */}
                  <CategoryHeading
                    card={card}
                    isOpen={isOpen}
                    handleClick={handleClick}
                  />

                  {/* Recommended and Level 1 Heading's children */}
                  {isOpen &&
                    itemCards?.map((item, index) => {
                      return (
                        <section
                          key={index}
                          className=" px-4 py-4 w-full flex justify-between items-center text-sm "
                        >
                          {isOpen && <CategoryBody item={item} />}
                        </section>
                      );
                    })}
                </>
              </div>
            </section>
          );
        }
      })}
    </section>
  );
}

export default RestaurantCategory;
