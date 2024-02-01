import { useEffect, useState } from "react";
import { searchRestaurants } from "../../utils/api";
import { Link } from "react-router-dom";
import IMAGE_ADDRESS from "../../utils/constants";

const SearchRestaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [popularCuisines, setPopularcuisines] = useState([]);

  useEffect(() => {
    const fetchPopularData = async () => {
      const data = await searchRestaurants();
      setPopularcuisines(data.cards[1]?.card?.card?.imageGridCards?.info);
      console.log(popularCuisines);
    };
    fetchPopularData();
  }, []);

  return (
    <main className="w-full">
      <div className="w-full flex  gap-6 p-10 justify-center">
        <input
          type="text"
          name="searchFilter"
          id="searchFilter"
          className="border-2 border-black p-2 w-3/4 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for restaurants and food"
        />
        <button
          className="px-3 py-2 rounded-lg bg-gray-300 border-2 border-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800"
          type="submit"
          onClick={() => handleFilter()}
        >
          Search{" "}
        </button>
      </div>
      <div className="flex flex-nowrap gap-2 px-10 ">
        {popularCuisines &&
          popularCuisines.map((item) => {
            return (
              <Link to="/" className="w-1/2" key={item.id}>
                <img
                  src={`${IMAGE_ADDRESS}/${item.imageId}`}
                  alt="food image"
                />
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default SearchRestaurant;
