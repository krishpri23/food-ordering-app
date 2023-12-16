import React from "react";

import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { fetchData } from "../utils/api";
import filterResByName from "../utils/helpers";
import { useEffect } from "react";
import { useState } from "react";

export default function OnlineRestaurants() {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    const fetchAndUpdateState = async () => {
      const data = await fetchData();
      setFilterRes(data);
      console.log("Initial data from API :", data);
      setListOfRes(data);
    };
    fetchAndUpdateState();
  }, []);

  useEffect(() => {
    // Filter search when button is clicked
    const filteredResponse = filterResByName(listOfRes, searchText);
    setFilterRes(filteredResponse);
  }, [searchText, listOfRes]);
  return (
    <>
      <h1 className="font-bold text-center">
        Restaurant with online delivery{" "}
      </h1>
      <div className="flex gap-6 p-10 justify-center">
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
      </div>

      <div className="w-full flex flex-col mx-auto lg:flex-row flex-wrap justify-center ">
        {filterRes &&
          filterRes.map((res) => (
            <RestaurantCard resData={res?.info} key={res.info.name} />
          ))}
      </div>
    </>
  );
}
