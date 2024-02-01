import React from "react";

function RestaurantHeader(props) {
  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    feeDetails: { message },
    sla: { deliveryTime },
  } = props?.resInfo.cards[0]?.card?.card?.info;
  return (
    <section className="">
      <h1 className="font-bold"> {name}</h1>
      <p className="flex">
        {cuisines.map((item, index) => {
          return (
            <li key={index} className="list-none text-gray-500">
              {item}
              {/* To check if it is not the last item */}
              {index !== cuisines.length - 1 && ","}
            </li>
          );
        })}
      </p>
      <p className="text-gray-500">
        {" "}
        {areaName} , {message.split("|")[0]}{" "}
      </p>
      <div className="w-full py-5 flex gap-4 font-bold uppercase ">
        <h1 className="font-semibold ">{deliveryTime} Mins </h1>
        <h1 className="font-semibold">{costForTwoMessage}</h1>
      </div>
      <div className="border-b-2 border-dashed border-gray-500" />
    </section>
  );
}

export default RestaurantHeader;
