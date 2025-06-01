// Predict and explain first...
//  =============> write your prediction here

// This code will result in a syntax error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// Why? Explanation:
// Inside the capitalise function, you're declaring a new let str variable, but str is already a parameter of the function. This causes a conflict—you
//  cannot declare a new variable with the same name as a parameter using let (or const) in the same scope. 



// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}