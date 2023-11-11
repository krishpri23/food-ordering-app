// using filterRes to display the api data to UI. Having listOfRes intact without making any changes. While filtering, it compares the filtered res with the actual res data

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../utils/shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  console.log("body rendered");

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();
    console.log(data);
    setListOfRes(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRes);
  };

  useEffect(() => {
    fetchData();
  }, [setListOfRes]);

  const handleFilter = () => {
    try {
      // when no filtering is done, it returns the actual array itself
      const filteredRes = listOfRes.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      // debugger;
      setFilterRes(filteredRes);
    } catch (error) {
      console.error(error);
    }
  };
  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className="flex gap-6">
        <input
          type="text"
          name="searchFilter"
          id="searchFilter"
          className="border-2 border-black "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        />
        <button
          className="px-10 py-2 rounded-lg bg-green-500"
          type="submit"
          onClick={() => handleFilter()}
        >
          Search{" "}
        </button>
      </div>
      <div className="res-cards">
        {filterRes &&
          filterRes.map((res) => {
            return (
              <Link key={res?.info?.id} to={`/restaurants/${res.info.id}`}>
                <div className="border-2 w-50 h-300 m-10 p-6">
                  <h2> {res.info.name} </h2>
                  <h3> {res.info.cuisines.join(",")}</h3>
                  <div className="ratings">
                    <h3>{res.info.avgRating} </h3>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
