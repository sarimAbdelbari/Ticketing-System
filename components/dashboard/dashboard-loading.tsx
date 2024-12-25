export function DashboardLoading() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-64"></div>
          </div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-32"></div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-gray-200 rounded-lg h-[400px]"></div>

        {/* Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-200 rounded-lg h-48"></div>
          <div className="bg-gray-200 rounded-lg h-48"></div>
        </div>
      </div>
    </div>
  );
}