// dynamic route to display menu items for each restaurant
// when this page loads, make api call and display the data for each card

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmer";
import { restaurants } from "../utils/mock";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const [openSection, setOpenSection] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // api for particular restaurant
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=14044&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    // console.log(json.data);
    setResInfo(json.data);
  };
  // important to check for null before destructuring
  if (resInfo === null) return <Shimmer />;

  //  To destructure section 1
  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    feeDetails: { message },
    sla: { deliveryTime },
    veg,
  } = resInfo.cards[0]?.card?.card?.info;

  // To destructure section 2
  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  // To destructure section 3 recommendation
  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards);

  // To destructure for all arrays of cards that hold different categories
  const { cards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);

  return (
    <main className="flex flex-col justify-center  p-10 bg-red-100 w-full">
      {/* Title of the restaurant */}
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
      </section>
      {/* Delivery time and display offers */}
      <section className="w-1/4 py-5 flex gap-10 shadow-lg bg-blue-50">
        <h1 className="font-semibold">{deliveryTime} Mins </h1>
        <h1 className="font-semibold">{costForTwoMessage}</h1>
      </section>

      {/* offers */}
      <section className="flex flex-wrap gap-10">
        {offers.map((offer, index) => {
          const { header, couponCode, description } = offer.info;
          return (
            <div
              className=" w-200 bg-green-50 shadow-lg py-2 px-3 mt-3 "
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
      <h1 className="font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>
      {/* Categories  */}

      <section className="">
        {cards.map((card, index) => {
          const { title } = card?.card?.card;

          return (
            <section className="flex flex-col gap-10 w-full my-5">
              <button
                className="font-bold uppercase bg-purple-300 px-7 py-4 w-1/4 "
                // onClick={() => setOpenSection(!openSection)}
              >
                {title}
              </button>

              {itemCards.map((item, index) => {
                const {
                  name,
                  description,
                  price,
                  itemAttribute: { portionSize },
                } = item?.card?.info;
                return (
                  <div className="flex flex-col bg-indigo-50 w-1/2 h-100 justify-center px-5 py-3 ">
                    <h1 className="font-semibold"> {name} </h1>
                    <p> {description}</p>
                    <h2> Rs {price / 100} </h2>
                    <p>{portionSize}</p>
                  </div>
                );
              })}
            </section>
          );
        })}
      </section>

      {/* <section className="flex flex-col gap-10 w-full ">
        <button
          className="font-bold uppercase bg-purple-300 px-7 py-4 w-1/4 "
          onClick={() => setOpenSection(!openSection)}
        >
          {" "}
          {itemCards[0]?.card?.info.category}
        </button>
        {openSection && (
          <>
            {itemCards.map((item, index) => {
              const {
                name,
                description,
                price,
                itemAttribute: { portionSize },
              } = item?.card?.info;
              return (
                <div className="flex flex-col bg-indigo-50 w-1/2 h-100 justify-center px-5 py-3 ">
                  <h1 className="font-semibold"> {name} </h1>
                  <p> {description}</p>
                  <h2> Rs {price / 100} </h2>
                  <p>{portionSize}</p>
                </div>
              );
            })}
          </>
        )}
      </section> */}
    </main>
  );
}

export default RestaurantMenu;
