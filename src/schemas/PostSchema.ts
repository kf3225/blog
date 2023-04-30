import { z } from "astro:content";

export const postSchema = z.object({
  layout: z.string(),
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  authorPlatform: z.string().optional(),
  image: z.object({
    url: z.string().optional(),
    alt: z.string().optional(),
  }),
  tags: z.array(z.string()),
});
