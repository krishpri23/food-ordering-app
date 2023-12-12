import React from "react";
import { FaStar } from "react-icons/fa";

function RestaurantCategory(props) {
  // Returns all the arrays of cards that hold different categories
  const { cards } = props?.resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  const { veg } = props?.resInfo.cards[0]?.card?.card?.info;

  console.log(cards);
  return (
    <section className=" w-full">
      <h1 className="w-full font-bold uppercase text-green-600 py-5">
        {veg && "Pure Veg"}
      </h1>

      {cards.map((card, index) => {
        const { title, itemCards, categories } = card?.card?.card;
        console.log(categories);

        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section className="flex flex-col gap-5 w-full my-5 " key={index}>
              {/* Recommended Section  */}
              <button
                className="font-bold uppercase  py-4 text-start "
                //   onClick={() => setOpenSection(!openSection)}
              >
                {title}
              </button>

              {/* For all other categories */}
              {categories?.map((card, index) => {
                const { title, itemCards } = card;
                return (
                  <div key={index} className={`border-b-2 pb-3`}>
                    {title} ({itemCards.length})
                  </div>
                );
              })}

              {/* recommended cards */}
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
