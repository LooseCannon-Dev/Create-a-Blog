import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../posts';

// 검색 페이지가 불러가는 글 목록. 본문은 마크다운 기호를 걷어 낸 일반 텍스트로 넣는다.
export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const items = posts.map((post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    date: post.data.date.toISOString(),
    body: (post.body ?? '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[#>*_`|~-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  }));
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
