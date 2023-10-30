export default fetchData = async (setListOfRes) => {
  const res = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const data = await res.json();
  setListOfRes(
    data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  console.log(data);
};
