"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ticketDetail } from "@/lib/data/ticket-detail";
import { format } from "date-fns";

export function TicketComments({ ticketId }: { ticketId: string }) {
  const [newComment, setNewComment] = useState("");

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Comments</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          {ticketDetail.comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.avatar} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(comment.createdAt), "PPp")}
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-end">
            <Button disabled={!newComment.trim()}>
              Add Comment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}