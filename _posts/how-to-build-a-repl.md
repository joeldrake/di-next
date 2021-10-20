---
title: 'How to build a REPL'
excerpt: 'Easy concept of how to build a repl'
image:
  url: '/assets/blog/code.jpg'
  width: 1200,
  height: 600,
author: 'Joel Drake'
date: '2021-02-02'
tags: coding
lang: en
---

This is a simple way to build a vanilla REPL, that I saw in this youtube-video https://www.youtube.com/watch?v=S3j1fLzC8_E. Credit goes to Peter Allen and the Svelte Society.

## What is a REPL?

A REPL (read eval print loop) is an common name for an interface where you have an input of some sort, where the user can enter code. And an output, where the entered code gets executed and displayed.

It's a great way to set up a sandbox for your component library (or whatever) where the user can test, play and interact with components. It's a good complement to documentation and tutorials.

### Demo

<iframe src="/repl" style="width:100%;height:260px;border:0;"></iframe>

## Lets build it

The concept is to have an iframe that you initiate with a srcdoc that has an addEventListener for messages, and a function that takes the content of these messages and puts in in the body of the iframe.

You can then post messages to the iframe and get it to render directly to its body.

```html
<div class="repl">
  <textarea id="code" oninput="update()"></textarea>
  <iframe id="output"></iframe>
</div>

<script>
  const textarea = document.getElementById('code');
  const iframe = document.getElementById('output');

  iframe.srcdoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <script type="module">
          function iframe_update(source) {
            document.body.innerHTML = source;

            // Select all scripts found in body and
            // execute them with import() to get scripts to work
            const scripts = document.body.querySelectorAll('script');
            if (scripts.length) {
              scripts.forEach((script) => {
                const blob = new Blob([script.innerHTML], { type: 'text/javascript' });
                const url = URL.createObjectURL(blob);
                import(url);
              });
            }
          }
          window.addEventListener('message', (e) => {
            iframe_update(e.data);
          });
        </script>
      </head>
      <body></body>
    </html>
  `;

  function update() {
    iframe.contentWindow.postMessage(textarea.value, '*');
  }

  // initially trigger an update manually
  // to get already added code going
  setTimeout(() => update(), 500);
</script>
```

This is the basic concept you can have as a starting point.

To get this usefull in your project you will most likely add more features and finesse to it.

## Additional snippets

Here are some code snippets that might help you on your way.

#### Prettify

If you have prettier version 2.0.5 or later installed you can use it's parser on standalone strings. You can use this with a button to prettify the code in the textarea.

```javascript
const prettier = require('prettier/standalone');
const plugins = [
  require('prettier/parser-html'), // parse html
  require('prettier/parser-postcss'), // parse css
  require('prettier/parser-babel'), // parse javascript
];

const prettifyCode = () => {
  const textarea = document.getElementById('code');
  const prettifiedCode = prettier.format(textarea.value, {
    parser: 'html',
    plugins,
  });
  textarea.value = prettifiedCode;
  update();
};
```

#### Tab

One thing you notice when trying to code in a textarea is that the behaviour if the tab key works different than in a texteditor...

Here is a snippet you can add to a keydown listener on your textarea to get the expected behaviour.

```javascript
const handleKeydown = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    insertTab(e.target);
  }
};
const insertTab = (textarea) => {
  const textToInsert = '  '; // 2 spaces
  const { selectionStart, selectionEnd } = textarea;
  textarea.value =
    textarea.value.slice(0, selectionStart) + textToInsert + textarea.value.slice(selectionStart);
  textarea.selectionStart = selectionStart + textToInsert.length;
  textarea.selectionEnd = selectionEnd + textToInsert.length;
  update();
};
```

#### Debounce

I suggest also adding a debounce to the function that updates the iframe content. Here is a simple implementation of debounce that can be used if you do not already have lodash in your project.

```javascript
const debounce = (fn, wait = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
```

#### CSS

Add some flexbox to it to get the windows nicely sized.

```css
.repl {
  display: flex;
}

#code {
  font-family: monospace;
  font-size: 16px;
  padding: 16px;
}

#code,
#output {
  width: 100%;
  border: 2px solid black;
}
```

## Summary

Use this blog post as a starting point for your own REPL. Copy the code you like and refactor it after your needs.

A nice feature to add would be a button that takes what is written in the textarea and url-encode it. This can then be added to the url as a query string, and then be entered in the textarea on page load. This is great way to let users share code with just an url.

Have fun coding ✨
