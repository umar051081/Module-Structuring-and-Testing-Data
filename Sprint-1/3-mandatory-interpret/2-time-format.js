const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// 6

// b) How many function calls are there?

// 1 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


// The % operator is the remainder (modulus) operator in JavaScript. According to MDN docs on Arithmetic Operators:

// The expression a % b returns the remainder after division of a by b.

// So, movieLength % 60 calculates the number of leftover seconds after dividing the total movie length in seconds by 60 (to find how many whole minutes fit into the seconds). It gives the seconds part of the total duration.



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// totalMinutes represents the total number of full minutes in the movie length, ignoring leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// movieDurationFormatted

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// This code works correctly for any non-negative integer value of movieLength.

// For negative values, the % operator will return negative remainders, which may cause confusing results (like negative seconds).

// Also, the code does not pad the numbers with zeros, so for single-digit seconds or minutes, the output might look like 2:3:5 instead of 2:03:05.

// For very large movieLength values, it still works fine since it just calculates hours, minutes, and seconds.

// For non-integer values (like floats), it might produce fractional seconds or minutes — since the code uses integer math, you might want to ensure input is an integer.

