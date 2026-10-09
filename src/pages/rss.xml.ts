import type { APIRoute } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION, url } from '../consts';
import { getPublishedPosts } from '../posts';
import { escapeXml } from '../xml';

// 새 글 구독용 RSS 2.0 피드.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const abs = (path: string) => new URL(url(path), site).href;
  const items = posts
    .map((post) => {
      const link = abs(`posts/${post.id}/`);
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
${post.data.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${escapeXml(abs(''))}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko</language>
    <atom:link href="${escapeXml(abs('rss.xml'))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
