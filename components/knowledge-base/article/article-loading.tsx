export function ArticleLoading() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Header Loading */}
          <div className="animate-pulse space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-muted rounded-lg" />
              <div className="h-6 w-20 bg-muted rounded" />
            </div>
            <div className="h-8 w-3/4 bg-muted rounded" />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-4 w-24 bg-muted rounded" />
              ))}
            </div>
          </div>

          {/* Content Loading */}
          <div className="animate-pulse space-y-6">
            <div className="h-40 bg-muted rounded" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-1/4 bg-muted rounded" />
                <div className="h-24 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Loading */}
        <div className="lg:col-span-1 space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-40 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}