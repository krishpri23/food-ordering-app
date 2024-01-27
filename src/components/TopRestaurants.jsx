// Top res chains in chennai

import React from "react";
import { TOP_RESTAURANTS } from "../utils/constants";

export default function TopRestaurants({ resData }) {
  const { title } = resData?.data?.cards[1]?.card?.card?.header;
  const restaurants =
    resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log("inside top chains ", restaurants);
  console.log("resData ", resData);

  return (
    <section className="w-full">
      <h1 className="font-bold text-2xl my-2"> {title} </h1>
      <div className=" flex overflow-x-auto">
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
                className="w-64 bg-green-200 m-5  rounded-xl font-bold  hover:border"
              >
                <div>
                  <img
                    src={` ${TOP_RESTAURANTS}/${cloudinaryImageId} `}
                    alt="res image"
                    className="w-64 h-32 rounded-md object-cover"
                  />
                </div>

                <div className="p-5">
                  <h1 className="text-wrap"> {name}</h1>
                  <div className="w-full flex gap-5">
                    <h2> {avgRating}</h2>
                    <h2>{deliveryTime} mins</h2>
                  </div>

                  <div className="flex w-3/4 text-wrap">
                    <h3 className="font-normal text-gray-500 truncate ">
                      {cuisines.join(",")}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
