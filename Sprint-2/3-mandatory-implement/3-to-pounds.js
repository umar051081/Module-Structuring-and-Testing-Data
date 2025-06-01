// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    // Remove trailing 'p'
    const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
  
    // Pad to at least 3 digits with leading zeros
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Extract pounds (all digits except last two)
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
  
    // Extract pence (last two digits), pad end with '0' if needed
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    // Return formatted pounds string
    return `£${pounds}.${pence}`;
  }
  
  // Test cases
  console.log(toPounds("399p"));  // £3.99
  console.log(toPounds("5p"));    // £0.05
  console.log(toPounds("85p"));   // £0.85
  console.log(toPounds("1234p")); // £12.34
  console.log(toPounds("0p"));    // £0.00
