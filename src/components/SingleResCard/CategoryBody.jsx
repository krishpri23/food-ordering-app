import React from "react";
import { FaStar } from "react-icons/fa";

export default function CategoryBody({ itemCards }) {
  console.log(itemCards);
  // Each accordion body
  return (
    <section className="border-b-2 border-gray-500 ">
      {itemCards?.map((item) => (
        <div
          key={item.card.info.id}
          className=" px-4 py-4 w-full flex justify-between items-center text-sm border-b-2 border-gray-500 "
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
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
              alt="food image"
              className="w-40 h-32 -mb-10"
            />
            <button className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-8 py-2 rounded-md ">
              {" "}
              Add to cart{" "}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
