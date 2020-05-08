import tokenizer from "./tokenizer"
import highlighter from './highlighter';

export function highlightHTMLElement(element: HTMLElement, query: string) {
  const tokens = tokenizer.tokenize(query);
  return highlightHTMLElementWithTokens(element, tokens);
}

export function highlightHTMLElementWithTokens(element: HTMLElement, tokens: string[]) {
  const children = element.childNodes;
  children.forEach(child => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      // @ts-ignore
      highlightHTMLElementWithTokens(child, tokens)
    }
    if (child.nodeType === Node.TEXT_NODE) {
      // @ts-ignore
      highlightTextNode(child, tokens)
    }
  })
}

function highlightTextNode(textNode: Text, tokens: string[]) {
  const text = textNode.data
  const highlightList = highlighter.createHighlightListFromTokens(text, tokens)
  if (highlightList.length === 1) return
  const parent = textNode.parentElement
  for (const highlightItem of highlightList) {
    if (highlightItem.highlighted) {
      const markedNode = createMarkedNode(text)
      parent?.insertBefore(textNode, markedNode)
    } else {
      const textNode = createTextNode(text)
      parent?.insertBefore(textNode, textNode)
    }
  }
}

function createTextNode(text: string) {
  return document.createTextNode(text)
}

function createMarkedNode(text: string) {
  const markElement = document.createElement('mark')
  const textNode = createTextNode(text)
  markElement.appendChild(textNode)
  return markElement
}

export default {
  highlightHTMLElement,
  highlightHTMLElementWithTokens
}
