const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="w-[300px] h-[200px] bg-gray-100  rounded-lg flex flex-col"
        >
          {/* Image Section */}
          <div className="h-2/3 bg-gray-300 rounded-t-lg"></div>

          {/* Text Section */}
          <div className="p-4 flex flex-col gap-2">
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;