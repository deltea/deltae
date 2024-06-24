import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
    cover: z.string().optional(),
		hero: z.string().optional(),
    github: z.string().optional(),
    itch: z.string().optional(),
	}),
});

export const collections = { projects };
