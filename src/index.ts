import highlighter from './highlighter';
import tokenizer from './tokenizer';

export const createHighlightList = highlighter.createHighlightList
export const createHighlightListFromTokens = highlighter.createHighlightListFromTokens
export const tokenize = tokenizer.tokenize

export default {
  createHighlightList: highlighter.createHighlightList,
  createHighlightListFromTokens: highlighter.createHighlightListFromTokens,
  tokenize: tokenizer.tokenize,
  stringContainsAnyOfQuery: highlighter.stringContainsAnyOfQuery,
  stringContainsAnyOfTokens: highlighter.stringContainsAnyTokens
}