import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  title?: string;
  message: string;
  retry?: () => void;
}

export function ErrorMessage({ 
  title = "Error", 
  message, 
  retry 
}: ErrorMessageProps) {
  return (
    <Alert variant="destructive" className="my-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex items-center gap-4">
        <span>{message}</span>
        {retry && (
          <Button variant="outline" size="sm" onClick={retry}>
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}