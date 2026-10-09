// 사이트맵·RSS에 넣는 문자열의 XML 특수문자를 바꾼다.
export function escapeXml(text: string) {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!);
}
