import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";

export default function OnlineRestaurants({ resData }) {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    setListOfRes(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, []);

  return (
    <section className="px-10">
      <h1 className="font-bold text-2xl mt-5">
        Restaurant with online delivery
      </h1>

      <div className="w-full flex flex-col gap-10 mx-auto lg:flex-row flex-wrap justify-center ">
        {listOfRes &&
          listOfRes.map((res) => (
            <RestaurantCard key={res.id} resData={res?.info} />
          ))}
      </div>
    </section>
  );
}
