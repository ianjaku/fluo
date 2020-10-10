
export type Tokenizer = (query: string) => string[];
/**
 * A match is a piece of a text defined by where the piece starts and how long it is.
 */
export type Match = { start: number; length: number }

export type Highlight = { value: string, highlighted: boolean }
