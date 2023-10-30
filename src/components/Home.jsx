import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { restaurants } from "../utils/mock";
import fetchData from "../utils/api";

export default function Home() {
  const [listOfRes, setListOfRes] = useState([]);

  console.log("body rendered");

  useEffect(() => {
    fetchData(setListOfRes);
  }, [setListOfRes]);

  return (
    <main className="res-cards">
      {listOfRes &&
        listOfRes.map((res) => {
          console.log(res.info.name);
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
