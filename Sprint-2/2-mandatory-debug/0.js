// Predict and explain first...

// =============> write your prediction here

// The result of multiplying 10 and 32 is undefined
// (And also 320 will be logged separately by the console.log(a * b) inside the function.)




function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The function multiply(a, b) logs the result of a * b using console.log, 
// but it does not return the result. So when it is called inside the template string:
// The function multiply(10, 32) is evaluated first. It prints 320 to the console but returns undefined. So the template string becomes:

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

