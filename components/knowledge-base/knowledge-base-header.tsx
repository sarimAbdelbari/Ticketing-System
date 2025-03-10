import { BookOpen } from "lucide-react";

export function KnowledgeBaseHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <BookOpen className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Find answers and learn about our ticketing system
          </p>
        </div>
      </div>
    </div>
  );
}