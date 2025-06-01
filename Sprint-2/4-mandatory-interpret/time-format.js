function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// pad is called 3 times — once for each of totalHours, remainingMinutes, and remainingSeconds.



// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// Let’s compute:

// seconds = 61

// remainingSeconds = 61 % 60 = 1

// totalMinutes = (61 - 1) / 60 = 60 / 60 = 1

// remainingMinutes = 1 % 60 = 1

// totalHours = (1 - 1) / 60 = 0 / 60 = 0

// pad calls happen in this order:

// pad(totalHours) → pad(0)

// pad(remainingMinutes) → pad(1)

// pad(remainingSeconds) → pad(1)

// Answer: The first call to pad is with num = 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// pad(0) does:
// 0.toString() → "0"
// "0".padStart(2, "0") → "00"

// Answer: "00"


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The last call is for pad(remainingSeconds). For input 61:

// remainingSeconds = 1

// Answer: num = 1 on the last call.

// Explanation: The last call to pad is for the seconds part, which is the remainder of seconds when divided by 60, so it is 1 here.



// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here


// pad(1) does:
// 1.toString() → "1"
// "1".padStart(2, "0") → "01"

// Answer: "01"

// Explanation: The number 1 converted to string "1" is padded with a leading zero to become "01" to always have 2 digits.

