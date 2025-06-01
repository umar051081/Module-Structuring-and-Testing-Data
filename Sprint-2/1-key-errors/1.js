// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared



// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// In the function convertToPercentage, the parameter is named decimalNumber.
// Inside the function, you're trying to declare a new constant with the same name:

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result);
