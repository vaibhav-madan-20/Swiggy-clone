const ShimmerCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-68">
      {/* Image Section */}
      <div className="h-48 w-full rounded-t-lg bg-gray-300 ">
      </div>

      {/* Text Section */}
      <div className="p-4 rounded-b-lg">
        {/* Restaurant Name */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 "></div>

        {/* Cuisines */}
        <div className="h-4 bg-gray-300 rounded w-full mb-3 "></div>

        {/* Rating and Cost Row */}
        <div className="flex items-center justify-between mt-2">
          <div className="h-4 bg-gray-300 rounded w-16 "></div>
          <div className="h-4 bg-gray-300 rounded w-20 "></div>
        </div>

        {/* Delivery Time */}
        <div className="h-4 bg-gray-300 rounded w-24 mt-2 "></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
      <div className="flex-grow mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
            {Array(8).fill(undefined)
            .map((restaurant, i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
      </div>
  )
}

export default Shimmer