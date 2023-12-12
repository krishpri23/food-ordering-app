import React from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

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

        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section className="flex flex-col gap-5 w-full my-5 " key={index}>
              {/* Recommended & Level 1 Headings */}
              <button
                className="font-bold uppercase  py-4 text-start "
                //   onClick={() => setOpenSection(!openSection)}
              >
                {itemCards && itemCards?.length > 0
                  ? `${title} (${itemCards.length})`
                  : title}
              </button>

              {/* For all other categories */}
              {categories?.map((card, index) => {
                const { title, itemCards } = card;
                console.log(card);
                return (
                  <div key={index} className="border-b-2 pb-3">
                    {itemCards.length > 0 ? (
                      <>
                        {/* Accordian - Category Heading Level 2*/}
                        <div className="flex justify-between">
                          <h1 className="font-bold uppercase">
                            {title} ({itemCards.length})
                          </h1>
                          <button className=" cursor-pointer ">
                            <FaAngleDown />
                          </button>
                        </div>

                        {/* Category's heading's children has a list of items */}
                        {itemCards?.map((card, index) => {
                          const { name, price, description } = card?.card?.info;

                          return (
                            <div
                              key={index}
                              className="flex flex-col  px-5 py-4 w-full text-sm"
                            >
                              <h1>{name} </h1>
                              <h1>Rs {price / 100}</h1>
                              <p className="text-gray-500">{description}</p>
                              <hr className="mt-6" />
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      { title }({ itemCards })
                    )}
                  </div>
                );
              })}

              {/* recommended cards & other cards */}
              {itemCards?.map((item, index) => {
                const { name, price, description, ribbon } = item?.card?.info;

                return (
                  <section key={index} className=" px-5 py-4 w-full  text-sm">
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
