# Fluo

Fluo is a helper library to help you with all your highlighting needs.

# 1. Find matches

This function finds all positions of the query in your text.

```js
fluo.findMatches("some great text.", "great")

// Result
[
  { start: 5, length: 5 }
]
```

After running this function you can also filter out unwanted matches. If you only want to find full words for example.

# 2. Create highlights

This function builds a list which makes it very easy for you to render your list with any framework.

```js
const matches = fluo.findMatches("some great text.", "great")
fluo.highlights("some great text.", matches)

// Result
[
  { value: "some ", highlighted: false },
  { value: "great", highlighted: true },
  { value: " text.", highlighted: false }
]
```

You can then loop over this list and render every piece of your text.

# 3. Highlight a HTML Element

To highlight every match in an HTML Element there is a completely separate function which does not use any of the previous functions.

Original HTML
```html
<div id="myElement">
  <p>
    Some great text here
  </p>
</div>
```

```js
const element = document.getElementById("myElement")
fluo.highlightHTMLElement(element, "great")
```

Result HTML
```html
<div id="myElement">
  <p>
    Some <mark>great</mark> text here
  </p>
</div>
```
