export function ProfileLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-4 bg-gray-200 rounded w-64" />
          </div>
        </div>

        {/* Profile Form */}
        <div className="space-y-6 rounded-lg border p-8">
          <div className="h-6 bg-gray-200 rounded w-32" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          <div className="h-10 bg-gray-200 rounded w-32" />
        </div>

        {/* Settings */}
        <div className="space-y-6 rounded-lg border p-8">
          <div className="h-6 bg-gray-200 rounded w-40" />
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32" />
                  <div className="h-3 bg-gray-200 rounded w-48" />
                </div>
                <div className="h-6 w-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}