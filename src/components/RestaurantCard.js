import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[280px] border rounded-2xl shadow-md hover:shadow-lg transition duration-300 h-[400px] flex flex-col justify-between">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          className="h-[200px] w-full object-cover rounded-lg"
          alt="Restaurant logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      {/* Text Section */}
      <div className="mt-4 text-center">
        <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-yellow-600 font-medium mt-2">
          {avgRating} ⭐
        </p>
        <p className="text-sm text-gray-600 mt-1">{costForTwo}</p>
        <p className="text-sm text-gray-600">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;