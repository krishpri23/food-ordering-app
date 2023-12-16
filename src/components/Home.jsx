// using filterRes to display the api data to UI. Having listOfRes intact without making any changes. While filtering, it compares the filtered res with the actual res data

import React, { useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";
import OnlineRestaurants from "./OnlineRestaurants";
import SliderOptions from "./SliderOptions";
import { fetchData } from "../utils/api";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(() => {
    const fetchAndUpdateState = async () => {
      const data = await fetchData();
      setListOfRes(data);
      console.log("Initial data from API :", listOfRes);
    };
    fetchAndUpdateState();
  }, []);

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="w-3/4 mx-auto">
      <SliderOptions resData={listOfRes} />
      <OnlineRestaurants />
    </main>
  );
}
