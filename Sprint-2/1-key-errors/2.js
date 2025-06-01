
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here


// This code will throw a SyntaxError because 3 is used as a parameter name, 
// and parameter names must be valid identifiers (like x, num, value, etc.). The number 3 is not a valid variable name.

function square(3) {
    return num * num;
}

// =============> write the error message here

// SyntaxError: Unexpected number



// =============> explain this error message here

// JavaScript functions require parameter names to be valid identifiers, not literal values. In this code, 3 is a number, not a variable name, so the parser throws an error when trying to interpret it as a function parameter.

// Also, within the function body, num is used but is not defined — so even if the syntax were correct, it would fail at runtime due to an undefined variable.


// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}


