## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

1. Open the Chrome devtools Console, type in `console.log` and then hit enter? What output do you get?

you won’t see any output immediately, but you will see the definition of the function printed.

2. Now enter just `console` in the Console, what output do you get back?

You get back an object printed to the Console.
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

3. Try also entering `typeof console`

It displays as an Object.

Answer the following questions:

1. What does `console` store?

console is an object provided by the browser (specifically the JavaScript engine) that includes methods for logging and debugging information. It stores functions like:

log()

error()

warn()

info()

debug()

assert()

table()

group(), groupEnd(), etc.

These methods are used to print messages or data to the browser's Console for debugging purposes.

2. What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console.log means you are accessing the log property (a function) from the console object.

The . is the dot notation in JavaScript, used to access a property or method of an object.
