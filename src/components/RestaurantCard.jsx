import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

/*

This component is displayed on the home page under recommended foods in chennai 
Clickable component redirects to each restaurant detail page. Check App.jsx for component redirected to


@params (Object) - restaurant info
@returns (JSX.element) - Restaurant Card
*/

function RestaurantCard({ resData }) {
  const discountHeader = resData.aggregatedDiscountInfoV3?.header;
  const discountSubHeader = resData.aggregatedDiscountInfoV3?.subHeader;

  const { name, avgRating, cuisines, cloudinaryImageId, areaName } = resData;

  // important to set a w and h for fixed size
  return (
    <div className=" bg-slate-200 w-72 h-80 m-10 p-6  hover:shadow-xl border-2 hover:border-slate-500 ">
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
        {/* Important to use a div as parent for flex-wrap as it wraps the exceeding list to next line  */}
        <div className="flex flex-wrap">
          <h3 className="text-gray-500 "> {cuisines.join(", ")}</h3>
        </div>

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
