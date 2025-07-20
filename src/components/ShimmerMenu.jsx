function ShimmerMenu() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Restaurant Header Skeleton */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
            {/* Restaurant Image Skeleton */}
            <div className="flex-shrink-0 mb-4 lg:mb-0">
              <div className="w-full lg:w-48 h-48 bg-gray-200 rounded-lg"></div>
            </div>

            {/* Restaurant Info Skeleton */}
            <div className="flex-1 space-y-4">
              {/* Restaurant Name Skeleton */}
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>

              {/* Location Skeleton */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>

              {/* Cuisines Skeleton */}
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                <div className="h-6 bg-gray-200 rounded-full w-14"></div>
                <div className="h-6 bg-gray-200 rounded-full w-18"></div>
                <div className="h-6 bg-gray-200 rounded-full w-12"></div>
              </div>

              {/* Rating and Cost Skeleton */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section Skeleton */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Menu Header Skeleton */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-7 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>

          {/* Menu Items Skeleton */}
          <div className="space-y-4">
            {/* Generate multiple menu item skeletons */}
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex-1 pr-4 space-y-3">
                  {/* Item Name Skeleton */}
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                  {/* Price Skeleton */}
                  <div className="h-6 bg-gray-200 rounded w-16"></div>

                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>

                  {/* Add to Cart Button Skeleton */}
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>

                {/* Item Image Skeleton - show only on some items for variety */}
                {index % 2 === 0 && (
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Loading Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"></div>
            <div
              className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
