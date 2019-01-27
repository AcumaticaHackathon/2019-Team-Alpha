## Javascript Based Lookup

To integrate with aspx input field, open the generated html for the screen, and identify the text field you want to add the autocomplete to. It should look something like:

```html
<input id='...' type=text ... />
```

Next, open `autocomplete.js` and modify the first line so that the variable is set to the aspx input field's id attribute value.

Additionally, the aspx page will need to include the following js and css libraries

```html
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"/>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
```
