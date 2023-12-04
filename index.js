//  *******************  EASY LEVEL PROBLEMS ***************************
// Q NO 1:
// Create a function that takes two numbers as arguments and returns their sum
function sumOf2(a, b) {
  return a + b;
}
console.log(sumOf2(2, 3));

// without using arithematic operators performing Sum of 2 numbers
function sum(a, b) {
  for (let i = 1; i <= b; i++) {
    ++a;
    // every iteration incrementing one
  }
  return a;
}
console.log(`without using operator (sum) ${sum(2, 3)}`);
// without using arithematic operators performing subtraction
function sub(a, b) {
  for (let i = 1; i <= b; i++) {
    --a; //every iteration decrementing one
  }
  return a;
}
console.log(`without using operator (sub) ${sub(5, 4)}`);

// Q NO 2:
// Write a function that takes an integer minutes and converts it into into seconds
function minToSecs(mins) {
  return typeof mins === "number" ? `${mins * 60} seconds` : "Enter minutes";
}
console.log(minToSecs(10));

// Q NO 3:
// Create a function that takes a number as  an argument ,increments  the number by +1 and returns the result
const incrmntBy1 = (a) => (typeof a === "number" ? ++a : "enter a number");
console.log(incrmntBy1(9));

// Q NO 4:
// Create a function that takes the age in years and return age in days
function ageInDays(years) {
  return years * 365;
}
console.log(`${ageInDays(20)} days`);

//Q NO 5:
// Create a function that takes voltage and current and returns calculated power.
function power(voltage, current) {
  return voltage * current + " watts";
}
console.log(power(4, 5));

// *** DAY - 2 ***

// Q NO 6:
// Write a function that returns the string "something" joined with space " " and the given argument a;
function smtngAdd(a) {
  return `something  ${a}`;
}
console.log(smtngAdd("Came"));

// Q NO 7:
// Create a function that takes two arguments. both arguments are integers, a and b. return true if one of them is 10 or if their sum is 10.
function trueOrfalse(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}
console.log(trueOrfalse(5, 5));

// Q NO 8:
// Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string
function strEql(a, b) {
  return a.length === b.length;
}
console.log(strEql("saikumar", "darisetti"));

// Q NO 9:
// Create a function that takes a normal name and returns a greetings in the form of a string. use arrow function .
const greet = (name) => "welcome " + name;
console.log(greet("saikumar"));

// Q NO 10:
// Create a function that takes an argument an array of 10 numbers (0,9) and returns a string of those numbers formatted as a phone number
function numberFormat(numAr) {
  if (!Array.isArray(numAr) || numAr.length !== 10) {
    return "Invalid input: Please provide an array of 10 numbers";
  }

  const frst3 = numAr.slice(0, 3).join("");
  const secnd3 = numAr.slice(3, 6).join("");
  const lst4 = numAr.slice(6, 10).join("");

  return `${frst3} ${secnd3} ${lst4}`;
  // return `${numAr[0]}${numAr[1]}${numAr[2]}-${numAr[3]}${numAr[4]}${numAr[5]}-${numAr[6]}${numAr[7]}${numAr[8]}${numAr[9]}`
}
console.log(numberFormat([9, 1, 3, 3, 2, 3, 3, 6, 7, 3]));

// Q NO 11:
// Create a function  that returns an array of strings sorted by length in ascending order.

// Q NO 12:
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// ​​findLargestNums [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] ➞ [7, 90, 2]​

// Q NO 13:
// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondlargest([10, 40, 30, 20, 50]) ➞ 40

// Q NO 14:
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example: removeDups([1, 0, 1, 0]) ➞ [1, 0]  removeDups(["The", "big", "cat","The",]) ➞ ["The", "big", "cat" ]

// Q NO 15:
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same
// number of occurrences in the array. Example: findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3*/
