export const SITE_TITLE = 'LooseCannon-Dev';
export const SITE_DESCRIPTION = '직접 만든 툴과 AI 작업물을 소개합니다.';
export const GITHUB_URL = 'https://github.com/LooseCannon-Dev';
// 댓글(utterances)이 이슈로 저장될 저장소
export const COMMENTS_REPO = 'LooseCannon-Dev/Create-a-Blog';
// GoatCounter 사이트 코드 (https://<코드>.goatcounter.com). 비워 두면 방문자 수 기능이 꺼진다.
export const GOATCOUNTER_CODE = 'loosecannon-dev';
// 툴별 카테고리. 글 머리말에 category: <name> 으로 지정한다. 새 툴은 여기에 한 줄 추가한다.
export const CATEGORIES = [
  { name: '공지', slug: 'notice' },
  { name: 'OmniTool', slug: 'omnitool' },
  { name: 'Code History Tracker', slug: 'code-history-tracker' },
  { name: 'ReFinder', slug: 'refinder' },
  { name: 'HumComposer', slug: 'humcomposer' },
  { name: 'CommBench', slug: 'commbench' },
] as const;

export function categorySlug(name: string) {
  return CATEGORIES.find((c) => c.name === name)?.slug;
}
// 글에 image가 없을 때 쓰는 기본 썸네일 (public 기준 경로)
export const DEFAULT_THUMBNAIL = 'images/logo.png';

// base 경로(/Create-a-Blog)를 붙인 내부 링크를 만든다.
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// 목록 한 페이지에 보여 줄 글 수
export const PAGE_SIZE = 10;

export function formatDate(date: Date) {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
