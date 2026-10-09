export const SITE_TITLE = 'LooseCannon-Dev';
export const SITE_DESCRIPTION = '직접 만든 툴과 AI 작업물을 소개합니다.';
export const GITHUB_URL = 'https://github.com/LooseCannon-Dev';
// 댓글(utterances)이 이슈로 저장될 저장소
export const COMMENTS_REPO = 'LooseCannon-Dev/Create-a-Blog';
// GoatCounter 사이트 코드 (https://<코드>.goatcounter.com). 비워 두면 방문자 수 기능이 꺼진다.
export const GOATCOUNTER_CODE = 'loosecannon-dev';
// 글에 image가 없을 때 쓰는 기본 썸네일 (public 기준 경로)
export const DEFAULT_THUMBNAIL = 'images/logo.png';

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
