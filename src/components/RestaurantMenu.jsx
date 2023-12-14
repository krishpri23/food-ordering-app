// dynamic route to display menu items for each restaurant
// when this page loads, make api call and display the data for each card

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmer";
import RestaurantOffers from "./SingleResCard/Offers";
import RestaurantHeader from "./SingleResCard/Header";
import { fetchMenu } from "../utils/api";
import RestaurantCategory from "./SingleResCard/RestaurantCategory";

/* 

This is a dynamic component that displays restaurant details using resId displayed on url
cards[] - contains all the info needed for restaurant details
0 - header info
1 - offers banner
2 - all the food items

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
          // To omit the card[0] as it has no title associated with it
          if (index !== 0 && itemCards) {
            return (
              <section className="flex flex-col gap-5 w-full my-5 " key={index}>
                <RestaurantCategory card={card} />
              </section>
            );
          }
        })}
      </section>
    </main>
  );
}

export default RestaurantMenu;
