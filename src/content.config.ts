import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    engine: z.string().optional(),
    topicSource: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
