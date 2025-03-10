export function UserLoading() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-64"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="h-10 bg-gray-200 rounded flex-1"></div>
          <div className="h-10 bg-gray-200 rounded w-40"></div>
          <div className="h-10 bg-gray-200 rounded w-40"></div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-gray-200">
          <div className="h-12 bg-gray-100"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 border-t border-gray-200"></div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="h-10 bg-gray-200 rounded w-64"></div>
        </div>
      </div>
    </div>
  );
}