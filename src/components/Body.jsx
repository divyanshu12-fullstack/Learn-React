import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useOnlineStatus from "../utils/useOnlineStatus.js";
import { BACKEND_API } from "../utils/constants";
import RestaurantCardSkeleton from "../utils/RestaurantCardSkeleton";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [workingList, setWorkingList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(BACKEND_API);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantList(restaurants);
      setWorkingList(restaurants);
    } catch (error) {
      console.log("Data Fetching Failed", error);
      setRestaurantList([]);
      setWorkingList([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (searchText = "", filteringStatus = filtering) => {
    let filteredRestaurants = restaurantList;

    if (searchText) {
      filteredRestaurants = filteredRestaurants.filter((item) =>
        item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (filteringStatus) {
      filteredRestaurants = filteredRestaurants.filter(
        (item) => item?.info?.avgRating > 4.3
      );
    }
    setWorkingList(filteredRestaurants);
  };

  const handleFilterToggle = () => {
    const newFilteringState = !filtering;
    setFiltering(newFilteringState);
    applyFilters(searchText, newFilteringState);
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h3>You are currently disconnected</h3>;
  }
  return (
    <>
      {loading ? (
        <div className="body">
          <div className="filter">
            <Skeleton height={40} width={150} className="basic-btn" />
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
          <div>
            <button className="basic-btn" onClick={handleFilterToggle}>
              {filtering ? "Show All Restaurants" : "Highest Rated Only"}
            </button>
          </div>
          <div className="search-bar">
            <div>
              <input
                className="search-box"
                type="text"
                placeholder="Your Favourite Eatery"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  applyFilters(e.target.value, filtering);
                }}
              />
            </div>
          </div>
          <div className="res-container">
            {workingList.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={`/city/lucknow/${restaurant?.info?.id}`}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
