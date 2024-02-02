import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSliderMenu } from "../../utils/api";
import RestaurantCard from "../RestaurantCard";

const DetailedSliderOption = () => {
  const { itemName, itemId } = useParams();
  const [resData, setResData] = useState(null);

  console.log("id & name  ", itemId, itemName);
  console.log("detailed slider  : ", resData);
  const restaurant = resData && resData?.cards[2]?.card?.card?.info;
  const description = resData && resData?.cards[0]?.card?.card?.description;
  const displayData = resData && resData?.cards.slice(2);
  console.log("display", displayData);
  console.log("restaurants", restaurant);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSliderMenu(itemId);
      setResData(result);
      //   console.log(resData);
    };
    fetchData();
  }, []);

  return (
    <main className="p-10 w-11/12 mx-auto">
      <div className="pl-15">
        <h1 className="font-bold"> {itemName} </h1>
        <p> {description} </p>
      </div>
      <div className="w-full flex flex-col gap-10 lg:flex-row flex-wrap">
        {displayData &&
          displayData.map((res) => {
            return (
              <RestaurantCard
                resData={res?.card?.card?.info}
                key={res?.card?.card?.info.id}
              />
            );
          })}
      </div>
    </main>
  );
};
export default DetailedSliderOption;
