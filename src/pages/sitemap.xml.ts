import type { APIRoute } from 'astro';
import { CATEGORIES, url } from '../consts';
import { getPublishedPosts } from '../posts';
import { escapeXml } from '../xml';

// 검색엔진 제출용 사이트맵. 글·태그·목록 페이지 주소를 모두 넣는다.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))];
  const abs = (path: string) => new URL(url(path), site).href;
  const entries = [
    { loc: abs(''), lastmod: posts[0]?.data.date },
    { loc: abs('tags/') },
    ...CATEGORIES.map((c) => ({ loc: abs(`categories/${c.slug}/`) })),
    ...tags.map((tag) => ({ loc: abs(`tags/${tag}/`) })),
    ...posts.map((post) => ({ loc: abs(`posts/${post.id}/`), lastmod: post.data.date })),
  ];
  const body = entries
    .map(
      (e) =>
        `  <url><loc>${escapeXml(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`,
    )
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
