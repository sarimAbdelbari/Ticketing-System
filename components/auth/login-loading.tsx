export function LoginLoading() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="animate-pulse space-y-6">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
            <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-1/4" />
              <div className="h-10 bg-muted rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-1/4" />
              <div className="h-10 bg-muted rounded" />
            </div>
          </div>

          {/* Remember me and forgot password */}
          <div className="flex justify-between">
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-1/4" />
          </div>

          {/* Submit button */}
          <div className="h-10 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}