// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3




// Explain why the output is the way it is
// =============> write your explanation here

// The function getLastDigit() is defined without any parameters and uses the fixed value of num = 103.

// Even though getLastDigit(42) passes an argument, it is ignored because the function does not accept or use parameters.

// So num.toString().slice(-1) is always called on num = 103, which gives "3" every time.

// That's why the output always shows the last digit of 103, which is 3, regardless of the number passed in.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The corrected function getLastDigit(number) now accepts a parameter.

// It converts the input number to a string and uses slice(-1) to get the last digit.

// Now it works correctly for any number passed in.
