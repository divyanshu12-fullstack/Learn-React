import { useState, useEffect } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API1, MENU_API2 } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log(resId);
    try {
      const data = await fetch(MENU_API1 + resId + MENU_API2);
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
      // Optionally, set resInfo to an empty object or a state that indicates an error
      setResInfo({});
    }
  };

  // Render ShimmerMenu while data is loading
  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  // Safely access nested properties
  const {
    id,
    name,
    city,
    cloudinaryImageId,
    locality,
    costForTwoMessage,
    avgRating,
    totalRatingString,
    cuisines,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {}; // Provide an empty object as fallback

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" /> */}
      <br></br>
      <div>
        {/* Only map if itemCards is not empty */}
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))
        ) : (
          <p>No menu items available.</p> // Message if no items are found
        )}
      </div>
    </div>
  );
};
export default RestaurantMenu;
