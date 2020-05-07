/**
 * This module provides utility functions to make highlighting text much simpler.
 */

import tokenizer from './tokenizer';
import { Match, HighlightList } from './highlighterTypes';

function findPositionOftoken(text: string, token: string, startAt: number): Match | null {
  const index = text.indexOf(token, startAt);
  if (index < 0) return null;
  return { start: index, length: token.length };
}

function findPositionsOfToken(text: string, token: string): Match[] {
  if (token.length === 0) return [];

  let start = 0;
  const results: Match[] = [];

  let match = findPositionOftoken(text, token, start);
  while (match != null) {
    results.push({ start: match.start, length: token.length });
    start = match.start + token.length;
    match = findPositionOftoken(text, token, start);
  }

  return results;
}

function findPositionsOfAllTokens(text: string, tokens: string[]) {
  const lowerCaseText = text.toLowerCase();
  return tokens.reduce<Match[]>((result, token) => {
    const positionsOfCurrenToken = findPositionsOfToken(lowerCaseText, token);
    result.push(...positionsOfCurrenToken);
    return result;
  }, []);
}

function createHighlightListFromMatches(text: string, matches: Match[]): HighlightList {
  const highlightList: HighlightList = [];
  let start = 0;

  matches.forEach((match) => {
    const prefix = text.slice(start, match.start);
    if (prefix.length > 0) {
      highlightList.push({ value: prefix, highlighted: false });
    }
    const matchedText = text.slice(match.start, match.start + match.length);
    highlightList.push({ value: matchedText, highlighted: true });
    start = match.start + match.length;
  });

  const remainder = text.slice(start);
  if (remainder.length > 0) {
    highlightList.push({ value: remainder, highlighted: false });
  }

  return highlightList;
}

/**
 * Creates a highlightList from text and a query
 */
export function createHighlightList(text: string, query: string): HighlightList {
  const tokens = tokenizer.tokenize(query);
  return createHighlightListFromTokens(text, tokens);
}

export function createHighlightListFromTokens(text: string, tokens: string[]): HighlightList {
  const matches = findPositionsOfAllTokens(text, tokens);
  const sortedMatches = matches.sort((a, b) => a.start - b.start);
  const res = createHighlightListFromMatches(text, sortedMatches);
  return res;
}

/**
 * Test whether the string contains part of a query
 */
export function stringContainsAnyOfQuery(text: string, query: string) {
  const tokens = tokenizer.tokenize(query);
  return stringContainsAnyTokens(text, tokens)
}

export function stringContainsAnyTokens(text: string, tokens: string[]) {
  const lowerCaseText = text.toLowerCase();
  return tokens.some((token) => lowerCaseText.includes(token));
}

export default {
  createHighlightList,
  createHighlightListFromTokens,
  stringContainsAnyOfQuery,
  stringContainsAnyTokens
};
