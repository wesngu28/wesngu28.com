import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      heroImage: z.string(),
      heroImageAlt: z.string(),
      heroImageAttr: z.string(),
      slug: z.string(),
    }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      repository: z.string(),
      techs: z.array(z.string()),
      heroImage: z.string(),
      heroImageAlt: z.string(),
      content: z.number(),
      live: z.string().optional(),
      md: z.string().optional(),
      hackathon: z.boolean().optional(),
    }),
  }),
}
