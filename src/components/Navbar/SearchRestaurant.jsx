import React from "react";

const SearchRestaurant = () => {
  return (
    <main>
      <div className="w-full flex gap-6 p-10 justify-center">
        <input
          type="text"
          name="searchFilter"
          id="searchFilter"
          className="border-2 border-black p-2 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-10 py-2 rounded-lg bg-gray-300 border-2 border-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800"
          type="submit"
          onClick={() => handleFilter()}
        >
          Search{" "}
        </button>
      </div>
    </main>
  );
};

export default SearchRestaurant;
