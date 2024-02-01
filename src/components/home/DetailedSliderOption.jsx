import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSliderMenu } from "../../utils/api";
import RestaurantCard from "../RestaurantCard";

export const DetailedSliderOption = () => {
  const { itemName, itemId } = useParams();
  const [resData, setResData] = useState(null);

  console.log("id & name  ", itemId, itemName);
  console.log("resData : ", resData);
  const restaurant = resData && resData?.cards[2]?.card?.card?.info;
  const description = resData && resData?.cards[0]?.card?.card?.description;
  const displayData = resData && resData?.cards.slice(2);
  console.log("display", displayData);
  console.log(restaurant);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSliderMenu(itemId);
      setResData(result);
      //   console.log(resData);
    };
    fetchData();
  }, []);

  return (
    <main className="p-10">
      <h1 className="font-bold "> {itemName} </h1>
      <p> {description} </p>
      {displayData &&
        displayData.map((res) => <h2> {res.card.card.info.name} </h2>)}
    </main>
  );
};
