import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("projects");
	return rss({
		title: "Deltae",
		description: "My portfolio.",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
      pubDate: post.data.date,
			link: `/projects/${post.slug}/`,
		})),
	});
}
