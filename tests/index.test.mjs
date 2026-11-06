import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('escapes reserved characters', () => {
  assert.equal(api.escapeXmlText('<&>'), '&lt;&amp;&gt;');
});
test('escapes quotes', () => {
  assert.equal(api.escapeXmlText('"\''), '&quot;&apos;');
});
test('round trips all predefined entities', () => {
  const x = '<tag a="b">&</tag>';
  assert.equal(api.unescapeXmlText(api.escapeXmlText(x)), x);
});
test('decodes named entity', () => {
  assert.equal(api.unescapeXmlText('&amp;lt;'), '&lt;');
});
test('leaves plain text unchanged', () => {
  assert.equal(api.unescapeXmlText('plain'), 'plain');
});
test('rejects unsupported entity', () => {
  assert.throws(() => api.unescapeXmlText('&nbsp;'), RangeError);
});
