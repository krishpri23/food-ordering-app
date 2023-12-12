import React from "react";
import { FaStar } from "react-icons/fa";

function RestaurantCategory(props) {
  // To destructure for all arrays of cards that hold different categories
  const { cards } = props?.resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  const { veg } = props?.resInfo.cards[0]?.card?.card?.info;

  return (
    <section className=" w-full">
      <h1 className="w-full font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>
      {cards.map((card, index) => {
        const { title, itemCards } = card?.card?.card;
        //   console.log(itemCards);
        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section
              className="flex flex-col gap-5 w-full my-5 border-2 border-red-100"
              key={index}
            >
              {/* Recommended Section  */}
              <button
                className="font-bold uppercase bg-purple-300 px-7 py-4  "
                //   onClick={() => setOpenSection(!openSection)}
              >
                {title}
              </button>

              {itemCards?.map((item, index) => {
                const { name, price, description, ribbon } = item?.card?.info;
                return (
                  <section key={index} className=" px-5 py-4 w-full">
                    {ribbon?.text && (
                      <div className="flex gap-2 items-center text-yellow-500">
                        <FaStar className="text-xs" />
                        <h1 className="text-yellow-600 font-bold">
                          {" "}
                          {ribbon?.text}
                        </h1>
                      </div>
                    )}
                    <h1> {name}</h1>
                    <h1> Rs {price / 100}</h1>
                    <p className="text-gray-500 my-2 "> {description}</p>
                    <hr className="mt-6" />
                  </section>
                );
              })}
              <hr />
            </section>
          );
        }
      })}
    </section>
  );
}

export default RestaurantCategory;
