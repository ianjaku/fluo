/**
 * A match is a piece of a text defined by where the piece starts and how long it is.
 */
export type Match = { start: number; length: number }

/**
 * A highlightlist is a list of items with a value, every item also has a boolean
 * that points out whether that text should be highlighted.
 *
 * This makes it easy to loop through a highlightlist and just print the values
 * without having to expose the application to xss injection.
 */
export type HighlightList = { value: string; highlighted: boolean }[]

export type MatchMiddleware = (match: { start: number, length: number }, text: string) => null | {start: number, length: number}
