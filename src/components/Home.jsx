import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../utils/shimmer";
// import { restaurants } from "../utils/mock";
// import fetchData from "../utils/api";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);

  console.log("body rendered");

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();
    setListOfRes(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRes);
    console.log("inside fetch data ");
  };

  useEffect(() => {
    fetchData();
    console.log("inside use effcet");
  }, [setListOfRes]);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="res-cards">
      {listOfRes &&
        listOfRes.map((res) => {
          console.log("inside res body ");
          return (
            <div key={res.info.id} className="container">
              <h2> {res.info.name} </h2>
              <div className="ratings">
                <h3>{res.info.avgRating} star </h3>
                <h3> {res.info.sla.deliveryTime} mins </h3>
              </div>
              <p> {res.info.cuisines.join(", ")} </p>
            </div>
          );
        })}
    </main>
  );
}
