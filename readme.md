# Form Toggler

## Version 1.0

### Introduction

__Form Toggler__ is a _jQuery_ plug-in which allows elements to be hidden or shown based on the value of a form component.

### How to use it

1. Add `jquery.formToggler.js` to your project, along with _jQuery_.
2. Create your form. When you reach an element that you would like to be conditionally hidden, give it `data-ft-name` and `data-ft-value` attributes, where the first is the name of the element to check, and the second is the value that will cause the conditional element to be visible.
3. Add the following _jQuery_ to your page, to be executed on load:

```javascript
	$('#form').formToggler();
```

...where `#form` is a selector for the `<form>` element.

A demo is available in demo.html.

### Author and Acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
