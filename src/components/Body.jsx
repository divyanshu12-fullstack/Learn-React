import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { BACKEND_API } from "../utils/constants";
import RestaurantCardSkeleton from "../utils/RestaurantCardSkeleton";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(BACKEND_API);
      const json = await data.json();
      setRestaurantList(
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log("Data Fetching Failed", error);
      setRestaurantList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="body">
          <div className="filter">
            <Skeleton height={40} width={150} className="filter-btn" />
          </div>
          <div className="res-container">
            {/* Getting an array from Number of Skeletons, 
          Using that array to map the function */}
            {Array.from({ length: 12 }, (_, index) => (
              <RestaurantCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
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
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
