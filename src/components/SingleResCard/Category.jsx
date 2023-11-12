import React from "react";

function RestaurantCategory(props) {
  // To destructure for all arrays of cards that hold different categories
  const { cards } = props?.resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;

  return (
    <section className="mx-auto w-3/4">
      {cards.map((card, index) => {
        const { title, itemCards } = card?.card?.card;
        //   console.log(itemCards);
        // To omit the card[0] as it has no title associated with it
        if (index !== 0) {
          return (
            <section className="flex flex-col gap-10 w-full my-5" key={index}>
              <button
                className="font-bold uppercase bg-purple-300 px-7 py-4 w-1/4 "
                //   onClick={() => setOpenSection(!openSection)}
              >
                {title}
              </button>

              {itemCards?.map((item, index) => {
                const { name, price } = item?.card?.info;
                return (
                  <section key={index} className="bg-indigo-50 px-5 py-4 w-1/4">
                    <h1> {name}</h1>
                    <h1> Rs {price / 100}</h1>
                  </section>
                );
              })}
            </section>
          );
        }
      })}
    </section>
  );
}

export default RestaurantCategory;
