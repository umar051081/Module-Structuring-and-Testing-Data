let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// carPrice.replaceAll(",", "") — line 4

// Number(...) — line 4 (wrapping the above)

// priceAfterOneYear.replaceAll("," "") — line 5 (Note: This has a syntax error, missing a comma)

// Number(...) — line 5 (wrapping the above)

// console.log(...) — line 9

// So, 5 function calls total.

// Lines with function calls: 4, 5, 9

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
                                                        ^^^
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements

// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));

// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations

// Line 1: let carPrice = "10,000";

// Line 2: let priceAfterOneYear = "8,543";

// Line 6: const priceDifference = carPrice - priceAfterOneYear;

// Line 7: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// carPrice is a string containing a number with commas (e.g., "10,000").

// .replaceAll(",", "") removes all commas from the string, so "10,000" becomes "10000".

// Number(...) converts the resulting string "10000" into a numeric value 10000.
