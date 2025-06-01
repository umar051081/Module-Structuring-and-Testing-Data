Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

1. What effect does calling the `alert` function have?

Calling the alert function in JavaScript causes a popup dialog box to appear in the browser with the specified message and an “OK” button. It pauses script execution until the user clicks “OK.”

2. Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

Calling prompt opens a dialog box with:

A message (in this case, "What is your name?"),

An input field, and
“OK” and “Cancel” buttons.

It allows the user to enter text and pauses script execution until the user responds.

3. What effect does calling the `prompt` function have? What is the return value of `prompt`?

The return value of prompt is:

A string containing the text entered by the user if they click “OK”.

null if the user clicks “Cancel”.
