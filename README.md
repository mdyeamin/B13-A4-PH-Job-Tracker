Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById finds one element by its id.
getElementsByClassName finds all elements with a class name and returns a live list that updates when the DOM changes.
querySelector finds the first element that matches a CSS selector.
querySelectorAll finds all elements that match a CSS selector and usually returns a static list that does not auto update when the DOM changes.

Question 2: How do you create and insert a new element into the DOM?

Answer:
Create a new element using document.createElement, set its text or attributes (like class or id), then insert it into the DOM using methods like appendChild, prepend, before, or after.

Question 3: What is Event Bubbling? And how does it work?

Answer:
Event bubbling is when an event starts on the element you clicked and then bubbles up to its parent, then the parent’s parent, all the way up to the document.

So if you click a button inside a card:
the click happens on the button first, then the card, then the container, then the body, then the document.

That’s why you can put one click listener on a parent container and still detect clicks on child elements by checking what was clicked.

Question 4: What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation means you add one event listener to a parent element instead of adding separate listeners to many child elements. When a child is clicked, the event bubbles up to the parent, and you check which child triggered it.

It’s useful because it uses fewer event listeners, works for elements added later (dynamic content), and is easier to manage than attaching listeners to every button or card.

Question 5: What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault stops the browser’s default action for an event, like stopping a form from submitting or stopping a link from opening.

stopPropagation stops the event from bubbling up to parent elements, so parent click handlers won’t run.