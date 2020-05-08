import highlighter from './highlighter';
import tokenizer from './tokenizer';
import DOMHighlighter from './DOMHighlighter';

export const createHighlightList = highlighter.createHighlightList
export const createHighlightListFromTokens = highlighter.createHighlightListFromTokens
export const tokenize = tokenizer.tokenize
export const highlightElement = DOMHighlighter.highlightHTMLElement
export const highlightElementWithTokens = DOMHighlighter.highlightHTMLElementWithTokens

export default {
  createHighlightList: highlighter.createHighlightList,
  createHighlightListFromTokens: highlighter.createHighlightListFromTokens,
  tokenize: tokenizer.tokenize,
  stringContainsAnyOfQuery: highlighter.stringContainsAnyOfQuery,
  stringContainsAnyOfTokens: highlighter.stringContainsAnyTokens,
  highlightElement: DOMHighlighter.highlightHTMLElement,
  highlightElementWithTokens: DOMHighlighter.highlightHTMLElementWithTokens
}
