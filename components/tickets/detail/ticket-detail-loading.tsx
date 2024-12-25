export function TicketDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Info Card */}
            <div className="h-48 bg-gray-200 rounded-lg"></div>
            
            {/* Comments */}
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Activity */}
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}