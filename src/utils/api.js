const fetchData = async () => {
  try {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();
    console.log(data);

    //update state var to json data

    return (
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchData;
