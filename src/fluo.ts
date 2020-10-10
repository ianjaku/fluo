import { Match, Tokenizer } from "./types";
import { tokenize as defaultTokenizer } from "./tokenizer";
import highlighter from "./highlighter";
import DOMHighlighter from "./DOMHighlighter";

export default {

  findMatches(text: string, query: string, tokenizer: Tokenizer = defaultTokenizer) {
    const queryTokens = tokenizer(query)
    return highlighter.findPositionsOfAllTokens(text, queryTokens)
  },
  highlightList(text: string, matches: Match[]) {
    return highlighter.createHighlightListFromMatches(text, matches)
  },
  highlightHTMLElement(element: HTMLElement, query: string, tokenizer: Tokenizer = defaultTokenizer) {
    const queryTokens = tokenizer(query)
    return DOMHighlighter.highlightHTMLElementWithTokens(element, queryTokens)
  }

}
