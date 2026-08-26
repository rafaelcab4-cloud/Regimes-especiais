import DOMPurify from "isomorphic-dompurify";

/**
 * Regime descriptions are authored content (kv/desc), not user input, but they
 * do carry inline markup (<strong>, <em>) and "\n" line breaks per the data
 * model. Sanitize before dangerouslySetInnerHTML per handoff recommendation #4.
 */
export function sanitizeRichText(text: string): string {
  const withBreaks = text.replace(/\n/g, "<br/>");
  return DOMPurify.sanitize(withBreaks, {
    ALLOWED_TAGS: ["strong", "em", "br"],
    ALLOWED_ATTR: [],
  });
}
