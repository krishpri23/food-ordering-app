import React from "react";

function RestaurantHeader(props) {
  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    feeDetails: { message },
    sla: { deliveryTime },
    veg,
  } = props?.resInfo.cards[0]?.card?.card?.info;
  return (
    <section>
      <h1 className="font-bold"> {name}</h1>
      <p className="flex">
        {cuisines.map((item, index) => {
          return (
            <li key={index} className="list-none">
              {item}
              {/* To check if it is not the last item */}
              {index !== cuisines.length - 1 && ","}
            </li>
          );
        })}
      </p>
      <p>
        {" "}
        {areaName} , {message.split("|")[0]}{" "}
      </p>
      <div className="w-1/4 py-5 flex gap-10 shadow-lg bg-blue-50">
        <h1 className="font-semibold">{deliveryTime} Mins </h1>
        <h1 className="font-semibold">{costForTwoMessage}</h1>
      </div>
      <h1 className="w-full font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>
    </section>
  );
}

export default RestaurantHeader;
