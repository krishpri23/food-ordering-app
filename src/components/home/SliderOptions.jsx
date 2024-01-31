// What's on your mind banner
import React, { useState } from "react";
import IMAGE_ADDRESS from "../../utils/constants";
import { Link } from "react-router-dom";

export default function SliderOptions({ resData }) {
  const { title } = resData?.data?.cards[0]?.card?.card?.header;
  const headerItems =
    resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  const [filterData, setFilterData] = useState([]);
  console.log("inside slider", filterData);

  return (
    <section className="w-full px-10 py-5  border-b-2 border-gray-500">
      <h1 className="font-bold text-2xl"> {title} </h1>
      <div className="flex w-full overflow-x-auto">
        {headerItems &&
          headerItems
            .filter((item) => item.entityId.length === 5)
            .map((filteredData) => {
              return (
                <Link
                  className="w-1/2"
                  key={filterData.id}
                  to={`collections/${filteredData.action.text}/${filteredData.entityId}`}
                >
                  <img
                    src={`${IMAGE_ADDRESS}/${filteredData.imageId}`}
                    alt="food image"
                    key={filteredData.id}
                  />
                </Link>
              );
            })}
        {/* {filterData &&
          filterData.map((item) => {
            return (
              <Link
                className="w-full"
                to={`collections/${item.name}/${item.entityId}/`}
              >
                <img
                  src={`${IMAGE_ADDRESS}/${item.imageId}`}
                  alt="food image"
                  key={item.id}
                />
              </Link>
            );
          })} */}
      </div>
    </section>
  );
}

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=750572&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null
