const ResponseCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-100 animate-pulse">
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};
export default ResponseCardSkeleton;