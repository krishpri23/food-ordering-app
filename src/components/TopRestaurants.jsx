import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function TopRestaurants({ resData }) {
  const { title } = resData?.data?.cards[2]?.card?.card?.header;
  const restaurants =
    resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log("inside top chains ", restaurants);

  return (
    <section className="w-full">
      <h1 className="font-bold text-2xl "> {title} </h1>
      <div className="flex overflow-x-auto bg-red-100">
        {restaurants &&
          restaurants.map((res) => (
            <RestaurantCard
              resData={res?.info}
              key={res?.info?.id}
              row={true}
            />
          ))}
      </div>
    </section>
  );
}
