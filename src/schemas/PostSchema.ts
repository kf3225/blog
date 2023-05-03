import { z } from "astro:content";

export const postSchema = z.object({
  layout: z.string(),
  isDraft: z.boolean(),
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  authorPlatform: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
  tags: z.array(z.string()),
});
