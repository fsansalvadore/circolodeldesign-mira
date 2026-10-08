// Since August 2026 the uidu CMS serves rich text fields as a ProseMirror
// (tiptap) document in `content.value`, where it used to serve an HTML string.
// The blocks render `content.value` through html-react-parser, so every
// document is turned back into HTML once, right after the page is fetched.

type PMMark = { type: string; attrs?: Record<string, any> };
type PMNode = {
  type: string;
  text?: string;
  attrs?: Record<string, any>;
  marks?: PMMark[];
  content?: PMNode[];
};

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const MARK_TAGS: Record<string, string> = {
  bold: 'strong',
  strong: 'strong',
  italic: 'em',
  em: 'em',
  underline: 'u',
  strike: 's',
  code: 'code',
  subscript: 'sub',
  superscript: 'sup',
};

const NODE_TAGS: Record<string, string> = {
  paragraph: 'p',
  bulletList: 'ul',
  orderedList: 'ol',
  listItem: 'li',
  blockquote: 'blockquote',
  codeBlock: 'pre',
};

const renderMarks = (html: string, marks: PMMark[] = []) =>
  marks.reduce((inner, mark) => {
    if (mark.type === 'link') {
      const href = escapeHtml(mark.attrs?.href ?? '');
      const target = mark.attrs?.target
        ? ` target="${escapeHtml(mark.attrs.target)}" rel="noopener noreferrer"`
        : '';
      return `<a href="${href}"${target}>${inner}</a>`;
    }
    const tag = MARK_TAGS[mark.type];
    return tag ? `<${tag}>${inner}</${tag}>` : inner;
  }, html);

const renderNode = (node: PMNode): string => {
  if (!node) return '';
  if (node.type === 'text') return renderMarks(escapeHtml(node.text ?? ''), node.marks);
  if (node.type === 'hardBreak') return '<br />';
  if (node.type === 'horizontalRule') return '<hr />';

  const children = (node.content ?? []).map(renderNode).join('');
  if (node.type === 'doc') return children;
  if (node.type === 'heading') {
    const level = Math.min(Math.max(Number(node.attrs?.level) || 2, 1), 6);
    return `<h${level}>${children}</h${level}>`;
  }

  const tag = NODE_TAGS[node.type];
  return tag ? `<${tag}>${children}</${tag}>` : children;
};

const isDocument = (value: any): value is PMNode =>
  !!value && typeof value === 'object' && value.type === 'doc';

export const prosemirrorToHtml = (doc: PMNode) => renderNode(doc);

// Returns a copy of `data` where every `{ value: <ProseMirror doc> }` carries
// the HTML string instead. Walks fields, field values and collection items.
export const normalizeRichText = <T>(data: T): T => {
  if (Array.isArray(data)) return data.map(normalizeRichText) as unknown as T;
  if (!data || typeof data !== 'object') return data;

  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      key === 'value' && isDocument(value)
        ? prosemirrorToHtml(value)
        : normalizeRichText(value),
    ]),
  ) as T;
};
