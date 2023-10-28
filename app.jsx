import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src="./food-app.png" alt="logo" width={100} height={100} /> */}
      </div>

      <nav>
        <ul className="menu">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
};

const resObj = {
  info: {
    id: "168713",
    name: "Pulusu Ruchulu",
    cloudinaryImageId: "x4k95wnty3qth5dojlqd",
    locality: "Anna Nagar",
    areaName: "Anna Nagar",
    costForTwo: "₹300 for two",
    cuisines: [
      "Andhra",
      "Biryani",
      "Chettinad",
      "South Indian",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4,
    feeDetails: {
      restaurantId: "168713",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 8300,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 8300,
    },
    parentId: "453669",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 6.7,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      lastMileTravelString: "6.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-10-27 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/pulusu-ruchulu-anna-nagar-chennai-168713",
    type: "WEBLINK",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
