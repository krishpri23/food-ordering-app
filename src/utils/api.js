const fetchData = async () => {
  try {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();
    console.log("inside fetch data ", data);

    //update state var to json data
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchMenu = async (resId) => {
  // api for particular restaurant
  const data = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  );

  const json = await data.json();
  return json.data;
};

export { fetchMenu, fetchData };
