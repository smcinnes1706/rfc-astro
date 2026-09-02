import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fixtureSchema = z.object({
  date: z.string(),
  time: z.string(),
  homeTeam: z.string(),
  awayTeam: z.string(),
  competition: z.string(),
  venue: z.string(),
  isHome: z.boolean(),
  team: z.enum(['first', 'reserves', 'veterans']),
  result: z.string().optional(),
  reportSlug: z.string().optional(),
});

const newsSchema = z.object({
  title: z.string(),
  date: z.string(),
  author: z.string(),
  category: z.string(),
  excerpt: z.string(),
  team: z.enum(['first', 'reserves', 'veterans']).optional(),
  image: z.string().optional(),
});

const fixturesBase = new URL('./content/fixtures/', import.meta.url).href;
const newsBase = new URL('./content/news/', import.meta.url).href;

export const collections = {
  fixtures: defineCollection({
    loader: glob({ pattern: '**/*.md', base: fixturesBase }),
    schema: fixtureSchema,
  }),
  news: defineCollection({
    loader: glob({ pattern: '**/*.md', base: newsBase }),
    schema: newsSchema,
  }),
};
