"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { updateProfileSchema } from "@/lib/validations/profile";
import type { UpdateProfileData } from "@/lib/types/profile";

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onSubmit = async (data: UpdateProfileData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Update user data
      signIn({
        ...user!,
        name: data.name,
        email: data.email,
      });
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              {...register("name")}
              error={errors.name?.message}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="currentPassword" className="text-sm font-medium">
              Current Password
            </label>
            <Input
              id="currentPassword"
              type="password"
              {...register("currentPassword")}
              error={errors.currentPassword?.message}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password
            </label>
            <Input
              id="newPassword"
              type="password"
              {...register("newPassword")}
              error={errors.newPassword?.message}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}