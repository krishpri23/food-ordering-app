// dynamic route to display menu items for each restaurant
// when this page loads, make api call and display the data for each card

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmer";
import RestaurantOffers from "./SingleResCard/Offers";
import RestaurantHeader from "./SingleResCard/Header";
import RestaurantCategory from "./SingleResCard/Category";
import { fetchMenu } from "../utils/api";

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

  return (
    <main className="flex flex-col mx-auto  p-10  w-3/4 border-2 border-black">
      {/* Title of the restaurant */}
      <RestaurantHeader resInfo={resInfo} />

      {/* offers */}
      <RestaurantOffers resInfo={resInfo} />

      {/* Categories  */}
      <RestaurantCategory resInfo={resInfo} />
    </main>
  );
}

export default RestaurantMenu;
