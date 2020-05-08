import tokenizer from '../src/tokenizer';

describe('splitQueryIntoTokens', () => {
  test('one item gets split into a token array with one item', () => {
    expect(tokenizer.tokenize('one')).toEqual(['one']);
  });
  test('multiple items separated by a space get split into multiple tokens', () => {
    expect(tokenizer.tokenize('one tw')).toEqual(['one', 'tw']);
  });
});
