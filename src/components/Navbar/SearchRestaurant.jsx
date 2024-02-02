import { useEffect, useState } from "react";
import { searchRestaurants } from "../../utils/api";
import { Link } from "react-router-dom";
import IMAGE_ADDRESS from "../../utils/constants";
import { suggestedRestaurants } from "../../utils/api";

const SearchRestaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [popularCuisines, setPopularcuisines] = useState([]);
  const [suggestedRes, setSuggestedRes] = useState([]);

  useEffect(() => {
    const fetchPopularData = async () => {
      const data = await searchRestaurants();
      setPopularcuisines(data.cards[1]?.card?.card?.imageGridCards?.info);
      console.log(popularCuisines);
    };
    fetchPopularData();
  }, []);

  useEffect(() => {
    const fetchSuggestedRes = async () => {
      const data = await suggestedRestaurants(searchText);
      setSuggestedRes(data?.suggestions);
      console.log("inside handle click ", suggestedRes);
    };

    fetchSuggestedRes();
  }, [searchText]);

  const extractName = (link) => {
    const arrays = link.split("?");
    const values = arrays[1].split("=");
    return values[1];
  };

  return (
    <main className="w-full ">
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

      {searchText ? (
        <div className="flex flex-wrap gap-10 justify-center items-center ">
          {suggestedRes &&
            suggestedRes?.map((res) => (
              <div className="w-3/4 flex bg-slate-300 px-5">
                {/* image */}
                <div>
                  <img
                    className="w-10 h-10"
                    src={`${IMAGE_ADDRESS}/${res.cloudinaryId}`}
                    alt="food image"
                  />
                </div>
                <div>
                  <h1> {res.text}</h1>
                  <h2>{res.tagToDisplay}</h2>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          <h1 className="block font-bold px-12 mb-5"> Popular Cuisines </h1>
          <div className="flex flex-nowrap gap-2 px-10 ">
            {popularCuisines &&
              popularCuisines.map((item) => {
                return (
                  <button
                    type="button"
                    className="w-1/2"
                    key={item.id}
                    onClick={() => setSearchText(extractName(item.action.link))}
                  >
                    <img
                      src={`${IMAGE_ADDRESS}/${item.imageId}`}
                      alt="food image"
                    />
                  </button>
                );
              })}
          </div>
        </>
      )}
    </main>
  );
};

export default SearchRestaurant;
