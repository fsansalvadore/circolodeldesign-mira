import { getPageSchema as getUiduPageSchema } from '@uidu/api.js/react';
import { normalizeRichText } from './richText';

// getPageSchema from @uidu/api.js, with rich text documents turned into HTML.
export const getPageSchema = (page) =>
  normalizeRichText(getUiduPageSchema(page));
