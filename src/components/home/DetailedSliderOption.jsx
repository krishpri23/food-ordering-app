import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSliderMenu } from "../../utils/api";

export const DetailedSliderOption = () => {
  const { itemName, itemId } = useParams();
  const [resData, setResData] = useState(null);

  console.log("id & name  ", itemId, itemName);
  console.log("resData : ", resData);
  const restaurant = resData && resData?.cards[2]?.card?.card?.info;
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
    <main>
      <h1> hello from detailed page :</h1>
    </main>
  );
};
