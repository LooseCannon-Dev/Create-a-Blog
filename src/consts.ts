export const SITE_TITLE = 'LooseCannon-Dev';
export const SITE_DESCRIPTION = '직접 만든 툴과 AI 작업물을 소개합니다.';

// base 경로(/Create-a-Blog)를 붙인 내부 링크를 만든다.
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
