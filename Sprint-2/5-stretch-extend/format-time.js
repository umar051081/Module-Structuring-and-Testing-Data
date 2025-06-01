// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);


// Problems found:
// The function ignores the minutes part of the input and always hardcodes :00 in the pm case.

// If the hour is exactly 12, it will show "12:00 am" — incorrect, it should be "12:xx pm".

// For hours 0 (midnight), it shows "00:xx am" which is incorrect; midnight is "12:xx am".

// It always appends "am" if hours ≤ 12, but "12" should be pm.

// It doesn't handle invalid times (e.g., "24:00", "13:65", or malformed strings).

function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(':');
  let hours = Number(hourStr);
  const minutes = minuteStr;

  // Validate time
  if (
    isNaN(hours) || isNaN(Number(minutes)) ||
    hours < 0 || hours > 23 ||
    Number(minutes) < 0 || Number(minutes) > 59
  ) {
    throw new Error('Invalid time format');
  }

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  if (hours === 0) hours = 12;

  return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
}


function testFormatAs12HourClock() {
  const tests = [
    { input: "00:00", expected: "12:00 am" },  // Midnight
    { input: "01:15", expected: "01:15 am" },
    { input: "08:00", expected: "08:00 am" },
    { input: "11:59", expected: "11:59 am" },
    { input: "12:00", expected: "12:00 pm" },  // Noon
    { input: "12:01", expected: "12:01 pm" },
    { input: "13:00", expected: "01:00 pm" },
    { input: "23:45", expected: "11:45 pm" },
    { input: "24:00", expectedError: true },   // Invalid hour
    { input: "12:60", expectedError: true },   // Invalid minutes
    { input: "ab:cd", expectedError: true },   // Malformed input
    { input: "7:05", expectedError: true },    // Malformed input (missing leading zero)
  ];

  for (const { input, expected, expectedError } of tests) {
    try {
      const result = formatAs12HourClock(input);
      if (expectedError) {
        console.error(`Test failed for input "${input}": Expected error but got "${result}"`);
      } else if (result !== expected) {
        console.error(`Test failed for input "${input}": Expected "${expected}" but got "${result}"`);
      } else {
        console.log(`Test passed for input "${input}"`);
      }
    } catch (e) {
      if (!expectedError) {
        console.error(`Test failed for input "${input}": Unexpected error "${e.message}"`);
      } else {
        console.log(`Test passed for input "${input}" (caught expected error)`);
      }
    }
  }
}

testFormatAs12HourClock();