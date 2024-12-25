import { z } from "zod";

export const createArticleSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(10000, "Content must be less than 10000 characters"),
  category: z
    .string()
    .min(1, "Category is required"),
  tags: z
    .string()
    .transform(str => str.split(",").map(tag => tag.trim()).filter(Boolean)),
  author: z
    .string()
    .min(1, "Author is required"),
});

export type CreateArticleData = z.infer<typeof createArticleSchema>;