import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-68 hover:bg-gray-100">
      {/* Image Section */}
      <div className="h-48 w-full rounded-t-lg">
        <img
          alt={`${name} logo`}
          src={`${CDN_URL}${cloudinaryImageId}`}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 rounded-b-lg">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-bold">{avgRating} ⭐</span>
          <span className="text-gray-600 text-sm">{costForTwo}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => (props) => (
  <div className="relative">
    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
      Promoted
    </div>
    <RestaurantCard {...props} />
  </div>
);
export const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

export default RestaurantCard;