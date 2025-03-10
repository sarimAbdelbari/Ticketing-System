export function LogDetailLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="h-10 w-24 bg-muted rounded" />
          <div className="flex items-center gap-3">
            <div className="h-8 w-48 bg-muted rounded" />
            <div className="h-6 w-20 bg-muted rounded" />
          </div>
          <div className="h-4 w-32 bg-muted rounded" />
        </div>

        {/* Event Details Card */}
        <div className="space-y-6 rounded-lg border p-6">
          <div className="h-6 bg-muted rounded w-32" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted rounded w-24" />
                <div className="h-6 bg-muted rounded w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Card */}
        <div className="space-y-6 rounded-lg border p-6">
          <div className="h-6 bg-muted rounded w-40" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted rounded w-24" />
                <div className="h-6 bg-muted rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}