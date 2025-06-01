// Predict and explain first...
//  =============> write your prediction here

// The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here


// The sum function contains a return statement that ends with a semicolon:

// In JavaScript, this means the function returns immediately with undefined, and the a + b expression is never executed. 
// The sum of 10 and 32 is undefined


// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);