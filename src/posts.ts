import { getCollection } from 'astro:content';

// 초안(draft: true)을 뺀 글을 최신순으로 돌려준다.
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
