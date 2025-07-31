const wrap = (text, tag) => `<${tag}>${text}</${tag}>`;
const PARSERS = [
  { regex: /^(.+)/gim, replace: (match, content) => (new RegExp(/^(\*|#)/)).test(match) ? match : wrap(content, 'p') }, // paragraph
  { regex: /^(#{1,7})\s*(.+)/gim, replace: (match, heading, text) => heading.length > 6 ? wrap(match, 'p') : wrap(text, `h${heading.length}`) }, // heading
  { regex: /__(.+)__/gim, replace: (match, text) => wrap(text, 'strong') }, // bold
  { regex: /_(.+)_/gim, replace: (match, text) => wrap(text, 'em') }, // italic 
  { regex: /^\*\s(.+)/gim, replace: (match, item) => wrap(item, 'li'), }, // list item 
  { regex: /\n/gim, replace: () => '' }, // new line
  { regex: /(<li>.+<\/li>)/gim, replace: (match, list) => wrap(list, 'ul') }, // list
];
export function parse(markdown) {
  return PARSERS.reduce((parsed, { regex, replace }) => parsed.replaceAll(new RegExp(regex), replace), markdown);
}