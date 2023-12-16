// using filterRes to display the api data to UI. Having listOfRes intact without making any changes. While filtering, it compares the filtered res with the actual res data

import React, { useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";
import OnlineRestaurants from "./OnlineRestaurants";
import { fetchData } from "../utils/api";

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
    <main className="m-10">
      <OnlineRestaurants />
    </main>
  );
}
