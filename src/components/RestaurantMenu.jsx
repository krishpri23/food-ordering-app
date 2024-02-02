// dynamic route to display menu items for each restaurant
// when this page loads, make api call and display the data for each card

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmer";
import { fetchMenu } from "../utils/api";
import RestaurantHeader from "./SingleResCard/RestaurantHeader";
import RestaurantOffers from "./SingleResCard/Offers";
import RestaurantCategory from "./SingleResCard/RestaurantCategory";
/* 

This is a dynamic component that displays restaurant details using resId displayed on url
cards[] - contains all the info needed for restaurant details
0 - header info
1 - offers banner
2 - all the food items


 - cards
  - itemCards - list of food items 
   

 cards[0] inside REGULAR has basic info about restaurant not needed.
 cards[1] - Recommended details   
*/

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuApi();
  }, []);

  const fetchMenuApi = async () => {
    const data = await fetchMenu(resId);
    setResInfo(data);
    console.log(data);
  };

  // State to isOpen/close accordion. This index value will reflect on which accordion will stay open
  const [showIndex, setShowIndex] = useState(0);

  const handleClick = (index) => {
    // To close the same accordion that is opened, set the index to -1 so that item with -1 will be opened ie. it does not exist anyway
    {
      index === showIndex ? setShowIndex(-1) : setShowIndex(index);
    }
  };

  // important to check for null before destructuring
  if (resInfo === null) return <Shimmer />;

  // Returns all the arrays of cards that hold different categories
  const { cards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  const { veg } = resInfo.cards[0]?.card?.card?.info;

  return (
    <main className="flex flex-col mx-auto  p-10  w-3/4 border-2 border-black">
      {/* Title of the restaurant  */}
      <RestaurantHeader resInfo={resInfo} />

      {/* offers */}
      <RestaurantOffers resInfo={resInfo} />

      {/* Categories   */}
      <section className=" w-full">
        <h1 className="w-full font-bold uppercase text-green-600 py-5">
          {veg && "Pure Veg"}
        </h1>

        {cards.map((card, index) => {
          const { itemCards } = card?.card?.card;
          // Omit the card[0] as it has no title associated with it
          if (index !== 0 && itemCards) {
            // controlled component by res menu
            // isOpen is sending true/false to res category to show/hide that accordion using 'index'
            return (
              <RestaurantCategory
                card={card}
                key={card.card.card.title}
                handleClick={handleClick}
                isOpen={index === showIndex ? true : false}
                index={index}
              />
            );
          }
        })}
      </section>
    </main>
  );
}

export default RestaurantMenu;
