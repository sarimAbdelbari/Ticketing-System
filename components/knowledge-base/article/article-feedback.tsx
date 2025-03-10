"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function ArticleFeedback() {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, send feedback to the server
    console.log({ feedback, comment });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-4">
        <p className="text-muted-foreground">
          Thank you for your feedback! It helps us improve our documentation.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Was this article helpful?</h3>
      <div className="flex gap-4">
        <Button
          variant={feedback === "helpful" ? "default" : "outline"}
          onClick={() => setFeedback("helpful")}
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Yes
        </Button>
        <Button
          variant={feedback === "not-helpful" ? "default" : "outline"}
          onClick={() => setFeedback("not-helpful")}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          No
        </Button>
      </div>

      {feedback === "not-helpful" && (
        <div className="space-y-4">
          <Textarea
            placeholder="How can we improve this article?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </div>
      )}
    </div>
  );
}