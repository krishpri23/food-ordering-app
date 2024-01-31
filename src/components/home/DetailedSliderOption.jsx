import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSliderMenu } from "../../utils/api";

export const DetailedSliderOption = () => {
  const { itemName, itemId } = useParams();
  const [resData, setResData] = useState("");

  console.log("id & name  ", itemId, itemName);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSliderMenu(itemId);
      setResData(result);
      console.log(resData);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1> hello from detailed page :</h1>
    </main>
  );
};
