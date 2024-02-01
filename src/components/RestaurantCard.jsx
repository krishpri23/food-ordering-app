import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TOP_RESTAURANTS } from "../utils/constants";

/*

This component is displayed on the home page under recommended foods in chennai 
Clickable component redirects to each restaurant detail page. Check App.jsx for component redirected to


@params (Object) - restaurant info
@returns (JSX.element) - Restaurant Card
*/

function RestaurantCard({
  // id,
  // name,
  // avgRating,
  // cuisines,
  // cloudinaryImageId,
  // discountHeader,
  // discountSubHeader,
  resData,
}) {
  const { id, name, avgRating, cuisines, cloudinaryImageId } = resData;
  const discountHeader = resData.aggregatedDiscountInfoV3?.header;
  const discountSubHeader = resData.aggregatedDiscountInfoV3?.subHeader;
  // important to set a w and h for fixed size
  return (
    <div className="bg-slate-100 w-72 h-80 m-5 p-5  hover:shadow-xl text-wrap ">
      <Link to={`/restaurants/${id}`}>
        <img
          className=" w-60 h-32 rounded-md mx-auto mb-10"
          src={`${TOP_RESTAURANTS} /${cloudinaryImageId}`}
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
          <h3 className="text-gray-500 truncate"> {cuisines.join(", ")}</h3>
        </div>

        <h3 className="flex gap-2 items-center">
          {" "}
          <FaStar className="text-green-900" /> {avgRating}
        </h3>
      </Link>
    </div>
  );
}

export default RestaurantCard;
