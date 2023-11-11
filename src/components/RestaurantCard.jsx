import React from "react";

function RestaurantCard({ name, cuisines, avgRating }) {
  console.log(name);
  return (
    <div className="container">
      <h2> {name} </h2>
      <div className="ratings">
        <h3>{avgRating} star </h3>
      </div>
    </div>
  );
}

export default RestaurantCard;
