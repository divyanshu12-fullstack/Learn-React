import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

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
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
            {/* Restaurant Image */}
            {cloudinaryImageId && (
              <div className="flex-shrink-0 mb-4 lg:mb-0">
                <img
                  className="w-full lg:w-48 h-48 object-cover rounded-lg"
                  src={CDN_URL + cloudinaryImageId}
                  alt={`${name} restaurant`}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Restaurant Info */}
            <div className="flex-1">
              {/* Restaurant Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>

              {/* Location */}
              {locality && city && (
                <p className="text-gray-600 mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {locality}, {city}
                </p>
              )}

              {/* Cuisines */}
              {cuisines && cuisines.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cuisines.slice(0, 5).map((cuisine, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                      >
                        {cuisine}
                      </span>
                    ))}
                    {cuisines.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{cuisines.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Rating and Cost */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                {avgRating && (
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1 bg-green-600 text-white px-2 py-1 rounded-md">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-medium">{avgRating}</span>
                    </div>
                    {totalRatingString && (
                      <span className="text-gray-500 text-sm">
                        ({totalRatingString})
                      </span>
                    )}
                  </div>
                )}

                {costForTwoMessage && (
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <span className="font-medium">{costForTwoMessage}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
            <div className="text-gray-500 text-sm">
              {itemCards.length} items available
            </div>
          </div>

          {/* Menu Items */}
          {itemCards.length > 0 ? (
            <div className="space-y-4">
              {itemCards.map((item) => {
                const { id, name, price, defaultPrice, description, imageId } =
                  item.card.info;
                const itemPrice = defaultPrice || price;

                return (
                  <div
                    key={id}
                    className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-1 pr-4">
                      {/* Item Name */}
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{itemPrice ? (itemPrice / 100).toFixed(0) : "N/A"}
                        </span>
                      </div>

                      {/* Description */}
                      {description && (
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {description}
                        </p>
                      )}

                      {/* Add to Cart Button */}
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                        Add to Cart
                      </button>
                    </div>

                    {/* Item Image */}
                    {imageId && (
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={CDN_URL + imageId}
                          alt={name}
                          onError={(e) => {
                            e.target.parentNode.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🍽️</div>
              <h3 className="text-xl text-gray-600 font-medium mb-2">
                No menu items available
              </h3>
              <p className="text-gray-500">
                We're working on getting the menu for this restaurant.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
