import { getCollection } from 'astro:content';

// 초안(draft: true)을 뺀 글을 최신순으로 돌려준다.
export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// 업데이트 글 제목의 버전(예: 'ReFinder V1.1.8 업데이트' → 'V1.1.8'). 버전이 없으면 undefined.
export function versionOf(title: string) {
  return title.match(/V\d+\.\d+\.\d+/)?.[0];
}
