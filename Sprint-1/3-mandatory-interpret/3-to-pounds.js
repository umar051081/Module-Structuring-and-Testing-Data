const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//step -1

// Initializes a string variable representing a price in pence, with a lowercase 'p'
// at the end (a common British format for expressing prices in pence, e.g., "50p", "399p").

//step -2 

// Removes the trailing 'p' character from the string to extract just the numeric part.

// penceString.length - 1 computes the index of the last character ('p').

// substring(0, ...) gets everything from index 0 up to but not including the 'p'.

// step - 3

// Ensures that the numeric string has at least 3 digits, adding leading zeros if needed.
// This standardizes the format so that:

// The last two digits always represent pence.

// The remaining digits (if any) represent pounds.

// Why it's done: For consistency, prices like "5p" (which would become "5") should become "005" so we can correctly split it into "0.05" later.

// Example result: "399" → "399" (already 3 digits, so unchanged)
// Another example: "9p" → "009"

// step - 4

// Extracts the pound portion of the string by taking all characters except the last two.

// This assumes the last two digits are pence.

// Remaining digits (if any) before that are the whole pound amount.

// Example: "399" → "3"

// step - 5

// Extracts the last two digits as the pence portion.

// Ensures it's exactly two digits long by padding with a trailing 0 if necessary (though this will usually already be two digits).

// Example: "399" → "99"
// Another example: "050" → "50"

//step -6 

// Formats and prints the final string representing the amount in pounds and pence.

// Example output for "399p":
// £3.99