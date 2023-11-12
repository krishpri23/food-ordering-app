import React from "react";

function RestaurantCard({ resData }) {
  console.log(resData);

  const { name, avgRating, cuisines } = resData;
  // return <div>RestaurantCard</div>;
  return (
    <div className="border-2 w-50 h-300 m-10 p-6 bg-lime-50 border-none shadow-sm hover:bg-lime-200 hover:shadow-lg">
      <h2> {name} </h2>
      <h3> {cuisines.join(",")}</h3>
      <h3> {avgRating}</h3>
    </div>
  );
}

export default RestaurantCard;
