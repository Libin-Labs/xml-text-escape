import * as api from '@lp-labs/xml-text-escape';
import { escapeXmlText, unescapeXmlText } from '@lp-labs/xml-text-escape';
console.log(unescapeXmlText(escapeXmlText('<value>')));
// @ts-expect-error invalid argument must be rejected by declarations
api.escapeXmlText(7);
