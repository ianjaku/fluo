import highlighter from '../src/highlighter';

describe('Single word query', () => {
  const testText = 'Some great TEsT text.';

  test('no matches returns an array with a single unhighlighted item', () => {
    const result = highlighter.createHighlightList(testText, 'randomQuery');
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual({ value: testText, highlighted: false });
  });

  test('single match in beginning returns an array with 2 items', () => {
    const result = highlighter.createHighlightList(testText, 'Some');
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual({ value: 'Some', highlighted: true });
    expect(result[1]).toEqual({ value: ' great TEsT text.', highlighted: false });
  });

  test('single match in the middle returns 3 items with the correct values', () => {
    const result = highlighter.createHighlightList(testText, 'great');
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual({ value: 'Some ', highlighted: false });
    expect(result[1]).toEqual({ value: 'great', highlighted: true });
    expect(result[2]).toEqual({ value: ' TEsT text.', highlighted: false });
  });

  test('single match at the end returns an array with 2 items', () => {
    const result = highlighter.createHighlightList(testText, 'text.');
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual({ value: 'Some great TEsT ', highlighted: false });
    expect(result[1]).toEqual({ value: 'text.', highlighted: true });
  });

  test('highlighting is case insensitive but still returns a formatted result', () => {
    const result = highlighter.createHighlightList(testText, 'teSt');
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual({ value: 'Some great ', highlighted: false });
    expect(result[1]).toEqual({ value: 'TEsT', highlighted: true });
    expect(result[2]).toEqual({ value: ' text.', highlighted: false });
  });
});

describe('multi word query', () => {
  const testText = 'Some great TEsT text which is a bit Longer.';

  test('with a single match only highlights the matched word', () => {
    const result = highlighter.createHighlightList(testText, 'great avenger');
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual({ value: 'Some ', highlighted: false });
    expect(result[1]).toEqual({ value: 'great', highlighted: true });
    expect(result[2]).toEqual({ value: ' TEsT text which is a bit Longer.', highlighted: false });
  });

  test('with two matches provides the right result', () => {
    const result = highlighter.createHighlightList(testText, 'great text');
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual({ value: 'Some ', highlighted: false });
    expect(result[1]).toEqual({ value: 'great', highlighted: true });
    expect(result[2]).toEqual({ value: ' TEsT ', highlighted: false });
    expect(result[3]).toEqual({ value: 'text', highlighted: true });
    expect(result[4]).toEqual({ value: ' which is a bit Longer.', highlighted: false });
  });

  test('with two matches right next to eachother highlights both', () => {
    const result = highlighter.createHighlightList(testText, 'gre at');
    expect(result.length).toEqual(4);
    expect(result[0]).toEqual({ value: 'Some ', highlighted: false });
    expect(result[1]).toEqual({ value: 'gre', highlighted: true });
    expect(result[2]).toEqual({ value: 'at', highlighted: true });
    expect(result[3]).toEqual({ value: ' TEsT text which is a bit Longer.', highlighted: false });
  });
});
