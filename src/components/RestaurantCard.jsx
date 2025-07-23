import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurant?.info;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-80 flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-200">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={`${name} restaurant`}
          onError={(e) => {
            e.target.src = "/placeholder-restaurant.jpg";
          }}
        />

        {/* Rating Badge */}
        {avgRating && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-medium flex items-center space-x-1">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span>{avgRating}</span>
          </div>
        )}

        {/* Delivery Time Badge */}
        {sla?.deliveryTime && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {sla.deliveryTime} min
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Top Content */}
        <div>
          {/* Restaurant Name */}
          <h3
            className="text-lg font-semibold text-gray-900 mb-2 truncate"
            title={name}
          >
            {name}
          </h3>

          {/* Cuisines */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10 overflow-hidden">
            {cuisines?.join(", ")}
          </p>
        </div>

        {/* Bottom Content */}
        <div>
          {/* Rating and Cost Row */}
          <div className="flex items-center justify-between mb-3">
            {avgRating && (
              <div className="flex items-center space-x-1">
                <div className="flex items-center space-x-1 text-green-600">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-sm font-medium">{avgRating}</span>
                </div>
              </div>
            )}

            {costForTwo && (
              <span className="text-gray-700 text-sm font-medium">
                {costForTwo}
              </span>
            )}
          </div>

          {/* Delivery Info */}
          {sla?.deliveryTime && (
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{sla.deliveryTime} mins</span>
              </div>

              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Free delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
