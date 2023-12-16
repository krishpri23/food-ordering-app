import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

export default function CategoryBody({ itemCards }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch action
    console.log("item dispatched ");
    dispatch(addItem(item));
  };

  console.log(itemCards);
  // Each accordion body
  return (
    <section className="border-b-2 border-gray-500 ">
      {itemCards?.map((item) => {
        const { name, price, ribbon, imageId, description } = item.card.info;
        return (
          <div
            key={item.card.info.id}
            className=" px-4 py-4 w-full flex justify-between items-center text-sm border-b-2 border-gray-500 "
          >
            <div className="flex flex-col w-3/4">
              {ribbon?.text && (
                <div className="flex gap-2 items-center text-yellow-500">
                  <FaStar className="text-xs" />
                  <h1 className="text-yellow-600 font-bold"> {ribbon.text}</h1>
                </div>
              )}
              <h1> {name}</h1>
              <h1> Rs {price / 100}</h1>
              <p className="text-gray-500 my-2 pb-3  "> {description}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              {imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
                  alt="food image"
                  className="w-32 h-28 -mb-10"
                />
              )}

              <button
                className=" bg-slate-300 hover:bg-slate-900 hover:text-white  text-black px-8 py-2 rounded-md "
                onClick={() => handleAddItem(item)}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
