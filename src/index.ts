export function escapeXmlText(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
export function unescapeXmlText(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  if (/&(?!amp;|lt;|gt;|quot;|apos;)[^;\s]*;/g.test(value))
    throw new RangeError('Unsupported or malformed XML entity');
  return value.replace(
    /&(amp|lt|gt|quot|apos);/g,
    (_, name: string) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" })[name]!,
  );
}
