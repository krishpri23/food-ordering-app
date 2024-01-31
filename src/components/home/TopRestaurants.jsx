// Top res chains in chennai

import React from "react";
import { TOP_RESTAURANTS } from "../../utils/constants";
import { Link } from "react-router-dom";

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
      {/* HERE IS THE DIV I MENTIONED IN THE CODE   */}
      <div className="overflow-x-auto flex ">
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
              <Link
                key={res.info.id}
                to={`restaurants/${res.info.id}`}
                className="w-80 h-80 m-5  p-5 bg-slate-100 rounded-xl font-bold text-wrap"
              >
                <img
                  src={` ${TOP_RESTAURANTS}/${cloudinaryImageId} `}
                  alt="res image"
                  className=" w-full h-32 rounded-md mb-2"
                />

                <div>
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
              </Link>
            );
          })}
      </div>
    </section>
  );
}
