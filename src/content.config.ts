import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // 썸네일 이미지 (public 기준 경로, 예: images/foo.png)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { posts };
