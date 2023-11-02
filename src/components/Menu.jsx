import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menu, setMenu] = useState(["hello"]);

  //   const fetchMenu = async () => {
  //     const res = await fetch(
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=14096&catalog_qa=undefined&submitAction=ENTER"
  //     );

  //     const json = await res.json();
  //     setMenu(json.data);
  //   };

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   if (menu) {
  //     const { name, cuisines, costForTwoMessage } =
  //       menu.cards[0]?.card?.card?.info || [];
  //   }

  console.log(useState());
  //   const itemCards =
  //     menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  // menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <main>
      <h2> name</h2>
      <h4>cuisines</h4>
    </main>
  );
}

//
//
