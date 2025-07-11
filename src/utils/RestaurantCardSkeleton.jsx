import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantCardSkeleton = () => {
  return (
    <div className="res-card">
      <Skeleton height={200} className="res-logo" />
      <h3>
        <Skeleton height={20} width="80%" />
      </h3>
      <hr />
      <h4>
        <Skeleton height={16} width="90%" />
      </h4>
      <h4>
        <Skeleton height={16} width="70%" />
      </h4>
      <h4>
        <Skeleton height={16} width="60%" />
      </h4>
      <h4>
        <Skeleton height={16} width="75%" />
      </h4>
    </div>
  );
};

export default RestaurantCardSkeleton;
