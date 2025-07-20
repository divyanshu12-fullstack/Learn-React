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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h3 className="text-2xl text-red-600 font-semibold">
          You are currently disconnected
        </h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <Skeleton height={40} width={150} className="rounded-lg" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }, (_, index) => (
              <RestaurantCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filter and Search Section */}
          <div className="mb-8 space-y-4">
            {/* Filter Button */}
            <div className="flex justify-center sm:justify-start">
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filtering
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={handleFilterToggle}
              >
                {filtering ? "Show All Restaurants" : "Highest Rated Only"}
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                  type="text"
                  placeholder="Search for your favorite restaurant..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    applyFilters(e.target.value, filtering);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          {workingList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🍽️</div>
              <h3 className="text-xl text-gray-600 font-medium mb-2">
                No restaurants found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {workingList.length} restaurant
                  {workingList.length !== 1 ? "s" : ""}
                  {searchText && ` for "${searchText}"`}
                  {filtering && " (Highest Rated)"}
                </p>
              </div>

              {/* Restaurant Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {workingList.map((restaurant) => (
                  <Link
                    key={restaurant?.info?.id}
                    to={`/city/lucknow/${restaurant?.info?.id}`}
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    <RestaurantCard restaurant={restaurant} />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
