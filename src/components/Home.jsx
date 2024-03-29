// using filterRes to display the api data to UI. Having listOfRes intact without making any changes. While filtering, it compares the filtered res with the actual res data

import React, { useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";
import OnlineRestaurants from "./home/OnlineRestaurants";
import { fetchData } from "../utils/api";
import SliderOptions from "./home/SliderOptions";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(() => {
    const fetchAndUpdateState = async () => {
      const data = await fetchData();
      setListOfRes(data);
    };
    fetchAndUpdateState();
  }, []);

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="w-full mx-auto px-20">
      <SliderOptions resData={listOfRes} />
      {/* <TopRestaurants resData={listOfRes} /> */}
      <OnlineRestaurants resData={listOfRes} />
    </main>
  );
}
