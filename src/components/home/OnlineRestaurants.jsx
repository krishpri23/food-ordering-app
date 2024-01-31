import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import { fetchData } from "../../utils/api";
import filterResByName from "../../utils/helpers";

export default function OnlineRestaurants() {
  const [searchText, setSearchText] = useState("");
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchAndUpdateState = async () => {
      const data = await fetchData();

      setFilterRes(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRes(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log("Initial data from API :", listOfRes);
    };
    fetchAndUpdateState();
  }, []);

  useEffect(() => {
    // Filter search when button is clicked
    const filteredResponse = filterResByName(listOfRes, searchText);
    setFilterRes(filteredResponse);
  }, [searchText, listOfRes]);
  return (
    <section className="px-10">
      <h1 className="font-bold text-2xl mt-5">
        {" "}
        Restaurant with online delivery{" "}
      </h1>
      {/* <div className="w-full flex gap-6 p-10 justify-center">
        <input
          type="text"
          name="searchFilter"
          id="searchFilter"
          className="border-2 border-black p-2 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-10 py-2 rounded-lg bg-gray-300 border-2 border-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800"
          type="submit"
          onClick={() => handleFilter()}
        >
          Search{" "}
        </button>
      </div> */}

      <div className="w-full flex flex-col mx-auto lg:flex-row flex-wrap justify-center ">
        {filterRes &&
          filterRes.map((res) => (
            <RestaurantCard key={res.id} resData={res?.info} />
          ))}
      </div>
    </section>
  );
}
