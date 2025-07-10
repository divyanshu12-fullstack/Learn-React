import RestaurantsList from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RestaurantsList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              )
            );
          }}
        >
          Highest Rated Only
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
