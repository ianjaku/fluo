/**
 * This is a separate tokenizer to make sure tokenizing of object_filter & highlighter are the same.
 *
 * The tokenizer takes a string, normalizes it and splits it up into searchable tokens.
 */
export function tokenize(query: string): string[] {
  return query.trim().toLowerCase().split(' ');
}

export default {
  tokenize,
};
