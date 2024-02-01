const fetchData = async () => {
  try {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

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

const fetchSliderMenu = async (itemId, itemName) => {
  const data = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${itemId}&tags=layout_CCS_${itemName}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
  );
  const json = await data.json();
  return json.data;
};

const searchRestaurants = async () => {
  const data = await fetch(
    " https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=13.0826802&lng=80.2707184"
  );
  const json = await data.json();
  return json.data;
};

export { fetchMenu, fetchData, fetchSliderMenu, searchRestaurants };
