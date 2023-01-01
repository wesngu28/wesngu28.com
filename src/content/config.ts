import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: {
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    heroImageAttr: z.string()
  },
});

export const collections = {
  blog: blog,
};