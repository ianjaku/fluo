# Fluo

Fluo is a helper library to help you with all your highlighting needs.

# What does Fluo do

Fluo takes a query and text and can send results in 3 formats.

# 1. HighlightList

To show a highlightList just simply loop over all items and wrap the ones with "highlighted" in a 'mark' element.
You can use this method with any front-end framework and still stay secure from xss injection attacks.

```js
highlighter.createHighlightList('some great text.', 'gre te')

// Result
[
  { value: 'some ', highlighted: false },
  { value: 'gre', highlighted: true },
  { value: 'at ', highlighted: false },
  { value: 'te', highlighted: true },
  { value: 'xt.', highlighted: false }
]
```

# 2. HTML Element

If you're using pure js, then you can just get a html element straight from fluo.



# 3. Match list

This just sends back a list of positions that have to be highlighted. This is a more generalised way of using fluo.

```js
highlighter.findMatches('some great text.', 'gre te')

[
  { start: 5, length: 3 },
  { start: 11, length: 2 },
]
```
