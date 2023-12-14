import React from "react";
import { FaStar } from "react-icons/fa";

export default function CategoryBody({ itemCards }) {
  console.log(itemCards);
  return (
    <section>
      {itemCards?.map((item) => (
        <div
          key={item.card.info.id}
          className=" px-4 py-4 w-full flex justify-between items-center text-sm "
        >
          <div className="flex flex-col w-3/4">
            {item.card?.info?.ribbon?.text && (
              <div className="flex gap-2 items-center text-yellow-500">
                <FaStar className="text-xs" />
                <h1 className="text-yellow-600 font-bold">
                  {" "}
                  {item.card?.info?.ribbon?.text}
                </h1>
              </div>
            )}
            <h1> {item.card?.info?.name}</h1>
            <h1> Rs {item.card?.info?.price / 100}</h1>
            <p className="text-gray-500 my-2 pb-3  ">
              {" "}
              {item.card?.info?.description}
            </p>
          </div>
          <div>
            <button className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-5 py-2 rounded-md ">
              {" "}
              Add to cart{" "}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
