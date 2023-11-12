// using filterRes to display the api data to UI. Having listOfRes intact without making any changes. While filtering, it compares the filtered res with the actual res data

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../utils/shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import fetchData from "../utils/api";
import filterResByName from "../utils/helpers";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  console.log("body rendered");

  useEffect(() => {
    const fetchAndUpdateState = async () => {
      const data = await fetchData();
      setFilterRes(data);
      setListOfRes(data);
    };
    fetchAndUpdateState();
  }, []);

  // Filter search when button is clicked
  const handleFilter = () => {
    const filteredResponse = filterResByName(listOfRes, searchText);
    setFilterRes(filteredResponse);
  };

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className="flex gap-6 p-10">
        <input
          type="text"
          name="searchFilter"
          id="searchFilter"
          className="border-2 border-black "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-10 py-2 rounded-lg bg-pink-100 border-2 border-pink-300"
          type="submit"
          onClick={() => handleFilter()}
        >
          Search{" "}
        </button>
      </div>

      <div className="res-cards">
        {filterRes &&
          filterRes.map((res) => (
            <Link key={res?.info?.id} to={`/restaurants/${res.info.id}`}>
              <RestaurantCard resData={res?.info} />
            </Link>
          ))}
      </div>
    </main>
  );
}
