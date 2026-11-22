import { getCollection } from 'astro:content';

// All posts, newest first.
export async function getSortedPosts() {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
