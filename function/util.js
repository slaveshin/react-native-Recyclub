// delete tag and replace others
export const ConvertText = (text) =>
  text
    .replace(/<[^>]*>?/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&middot;/g, "·")
    .replace(/&amp;middot;/g, "&");
