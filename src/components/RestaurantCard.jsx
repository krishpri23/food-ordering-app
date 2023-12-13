import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function RestaurantCard({ resData }) {
  console.log(resData);

  const discountHeader = resData.aggregatedDiscountInfoV3?.header;
  const discountSubHeader = resData.aggregatedDiscountInfoV3?.subHeader;

  const { name, avgRating, cuisines, cloudinaryImageId, areaName } = resData;

  // important to set a fixed width and height for cards as info size varies
  return (
    <div className=" bg-slate-200 w-72 m-10 p-6 basis-1/4 shadow-sm  hover:shadow-lg">
      <Link to={`/restaurants/${resData.id}`}>
        <img
          className=" w-36 h-24 rounded-md mx-auto mb-10"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="restaurant image "
        />
        {/* check if discount is available */}
        {discountHeader && discountSubHeader ? (
          <h2 className="font-bold uppercase text-green-900">
            {" "}
            {discountHeader + " " + discountSubHeader}
          </h2>
        ) : null}
        <h2 className="font-bold"> {name} </h2>
        <h3 className="text-gray-500 "> {cuisines.join(",")}</h3>
        <h3 className="flex gap-2 items-center">
          {" "}
          <FaStar className="text-green-900" /> {avgRating}
        </h3>
        <h3 className="text-gray-500"> {areaName}</h3>
      </Link>
    </div>
  );
}

export default RestaurantCard;
