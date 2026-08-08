import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog en español. Para publicar un artículo basta con crear un archivo .md
// dentro de src/content/blog/ con los campos de abajo en la cabecera.
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			image: image().optional(),
			imageAlt: z.string().optional(),
			draft: z.boolean().default(false)
		})
});

export const collections = { blog };
