import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurant?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3>{name}</h3>
      <hr />
      <h4>{"Cuisines: " + cuisines.join(", ")}</h4>
      <h4>{"Overall Rating: " + avgRating + "/5"}</h4>
      <h4>{"Cost for Two: " + costForTwo}</h4>
      <h4>{"ETA: " + sla.deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;
