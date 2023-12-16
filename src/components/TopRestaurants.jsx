import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import IMAGE_ADDRESS from "../utils/constants";

export default function TopRestaurants({ resData }) {
  const { title } = resData?.data?.cards[2]?.card?.card?.header;
  const restaurants =
    resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log("inside top chains ", restaurants);

  return (
    <section>
      <h1 className="font-bold text-2xl my-2"> {title}</h1>
      <div className="w-full flex overflow-x-auto">
        {restaurants &&
          restaurants.map((res) => {
            const {
              name,
              areaName,
              avgRating,
              sla: { deliveryTime },
              cuisines,
              cloudinaryImageId,
            } = res.info;

            return (
              <div
                key={res.info.id}
                className=" min-w-max min-h-max flex flex-col m-5 rounded-xl font-bold px-5 py-3 hover:border"
              >
                <img
                  src={` ${IMAGE_ADDRESS}/${cloudinaryImageId} `}
                  alt="res image"
                  className="w-60 h-32 rounded-md"
                />
                <h1> {name}</h1>

                <div className="w-full flex  gap-5">
                  <h2> {avgRating}</h2>
                  <h2>{deliveryTime} mins</h2>
                </div>

                <div className="flex flex-wrap overflow-auto w-3/4">
                  <h3 className="font-normal text-gray-500  ">
                    {cuisines.join(", ")}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
