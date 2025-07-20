import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
