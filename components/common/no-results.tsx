import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  title?: string;
  description?: string;
  onReset?: () => void;
}

export function NoResults({
  title = "No results found",
  description = "Try adjusting your search or filters to find what you're looking for.",
  onReset,
}: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <SearchX className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 max-w-sm">{description}</p>
      {onReset && (
        <Button
          variant="outline"
          onClick={onReset}
          className="mt-4"
        >
          Reset Filters
        </Button>
      )}
    </div>
  );
}