export function KnowledgeBaseLoading() {
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

        {/* Search */}
        <div className="h-12 bg-gray-200 rounded"></div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
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