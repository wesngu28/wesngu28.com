import { z, defineCollection } from 'astro:content'

export const collections = {
  'blog': defineCollection({
    schema: z.object({
      layout: z.string(),
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      heroImage: z.string(),
      heroImageAlt: z.string(),
      heroImageAttr: z.string()
    }),
  }),
  'projects': defineCollection({
    schema: z.object({
      layout: z.string(),
      title: z.string(),
      description: z.string(),
      repository: z.string(),
      techs: z.array(z.string()),
      heroImage: z.string(),
      heroImageAlt: z.string(),
      content: z.number(),
      live: z.string().optional(),
      md: z.string().optional(),
      hackathon: z.boolean().optional()
    }),
  }),
};