// What's on your mind banner
import React from "react";
import IMAGE_ADDRESS from "../../utils/constants";
export default function SliderOptions({ resData }) {
  console.log("inside slider options", resData);

  const { title } = resData?.data?.cards[0]?.card?.card?.header;
  const headerItems =
    resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  return (
    <section className="w-full px-10 py-5  border-b-2 border-gray-500">
      <h1 className="font-bold text-2xl"> {title} </h1>
      <div className="flex w-full overflow-x-auto">
        {headerItems &&
          headerItems.map((item) => (
            <img
              src={`${IMAGE_ADDRESS}/${item.imageId} `}
              alt="food image"
              className="w-full"
              key={item.id}
            />
          ))}
      </div>
    </section>
  );
}
