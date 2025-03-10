export function UserDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="h-10 w-24 bg-muted rounded" />
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-muted" />
            <div className="space-y-2">
              <div className="h-8 w-48 bg-muted rounded" />
              <div className="flex gap-3">
                <div className="h-6 w-20 bg-muted rounded" />
                <div className="h-6 w-20 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-2">
            <div className="h-[400px] bg-muted rounded-lg" />
          </div>

          {/* Activity Card */}
          <div>
            <div className="h-[400px] bg-muted rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}