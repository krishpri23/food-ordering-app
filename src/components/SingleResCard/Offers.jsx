import React from "react";

function RestaurantOffers(props) {
  const { offers } =
    props?.resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <section className="flex flex-col lg:flex-row lg:overflow-x-auto gap-10">
      {offers.map((offer, index) => {
        const { header, couponCode, description } = offer.info;
        return (
          <div
            className=" w-64 border-2 border-gray-200 shadow-lg py-2 px-3 mt-3 text-xs "
            key={index}
          >
            <h1 className="flex gap-10  "> {header} </h1>
            <p>
              {" "}
              {couponCode} | {description}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default RestaurantOffers;
