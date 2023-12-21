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
const arrStrs = ["pineapple", "orange", "mango", "banana", "apple"];
function sortbystrlen(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortbystrlen(arrStrs));

// Q NO 12:
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// ​​findLargestNums [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] ➞ [7, 90, 2]​

function findlrgNum(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let subMax = subArr[0];
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] > subMax) {
        subMax = subArr[j];
      }
    }
    res.push(subMax);
  }
  return res;
}
const subNums = [
  [4, 2, 7, 1],
  [20, 70, 100, 40, 90],
  [1, 2, 0],
];
console.log(findlrgNum(subNums));

// Q NO 13:
// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondlargest([10, 40, 30, 20, 50]) ➞ 40

function SecondLargestFunc(arr) {
  let largest = arr[0];
  let SecondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      SecondLargest = largest;
      largest = arr[i];
    }
  }
  return `Second Largest Number is ${SecondLargest}`;
}

let testArr = [10, 40, 30, 20, 50, 60];
console.log(SecondLargestFunc(testArr));

// by using method
const secndLargst = (arr) => {
  return arr.sort((a, b) => b - a)[1];
};
console.log(secndLargst(testArr));

// Q NO 14:
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example: removeDups([1, 0, 1, 0]) ➞ [1, 0]  removeDups(["The", "big", "cat","The",]) ➞ ["The", "big", "cat" ]

function rDups(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) == -1) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}
let testArr2 = [1, 0, 1, 0];
console.log(rDups(testArr2));

const removeDupsBySets = (arr) => new Set(arr);
console.log(removeDupsBySets(testArr2));

// Q NO 15:
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same
// number of occurrences in the array. Example: findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3*/
function nonRepeated(arr) {
  let uniqValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      uniqValue = arr[i];
    }
  }
  return uniqValue;
}
let testArr4 = [2, 2, 2, 3, 4, 4, 4];
console.log(nonRepeated(testArr4));

function Repeated(arr) {
  let uniqValue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      uniqValue.push(arr[i]);
    }
  }
  return uniqValue;
}

console.log(Repeated(testArr4));


// Q NO 16
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:
// charCount("c", "Chamber of secrets") ➞ 1
function lettersCounter(letter, string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (letter === string[i]) count++;
  }
  return count;
}
console.log(lettersCounter("i", "shirdi sai"));

// Q NO 17
// Create a function that takes a string and returns the number (count) of vowels
// contained within it.
// Example:
// countVowels("Celebration") ➞ 5
function countOfVowels(string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string.toLowerCase()[i] === vowels[j]) {
        count++;
      }
    }
  }
  return `${string} -- count of vowels ${count}`;
}
console.log(countOfVowels("Saikumar"));

// Q NO 18
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
function caseChange(word) {
  let res = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      res = res + word[i].toLowerCase();
    } else {
      res = res + word[i].toUpperCase();
    }
  }
  return res;
}
console.log(caseChange("Sai Kumar"));

// Q NO 19
// Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
// Input: n=5
// Output: 2 4 6 8 10
// Explanation: Loop start with 1 go till 5 bcoz n=5
// 1 x 2 =2, 2 x 2=4, 3 x 2=6
function rangeMultBy2(n) {
  let multiplier = 2;
  for (let i = 1; i <= n; i++) {
    console.log(i * multiplier);
  }
}
rangeMultBy2(5);

// Q NO 20
// Create Function that will take one parameter and return type of the data.
// Input: 500
// Output: Integer
// Input: Coding
// Output: String
function checkTypeOf(param) {
  return typeof param;
}
console.log(checkTypeOf(500));

// Q NO 21
// Program to find greatest of three numbers(using ternery operator).
// Input: 4 8 2
// Output: 8 is gretest
function greatestOf3(a, b, c) {
  return a > b && a > c
    ? `${a} is greatest`
    : b > c
    ? `${b} is greatest`
    : `${c} is greatest`;
}
console.log(greatestOf3(9, 11, 1));

// Q NO 22
// Program to find factorial of number.
// Input: n=5
// Output: 120
// Explanation: 5 x 4 x 3 x 2 x 1 = 120
function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i; //1 2 6 24 120
  }
  return res;
}
console.log(factorial(5));

// Q NO 23
// Program to arrange numbers in ascending order
// Input: [2,3,1,5,4]
// Output: [1,2,3,4,5]
//  Sort the Array using loop only(you can not use predefined function).
function ascendingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(ascendingSort([2, 3, 1, 5, 4]));

//descending
function descendingSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(descendingSort([2, 3, 1, 5, 4]));

// Q NO 24
// Print Patter using loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function patternNums1(n) {
  for (let i = 1; i <= n; i++) {
    res = "";
    for (let j = 1; j <= i; j++) {
      res += j + " ";
    }
    console.log(res);
  }
}
patternNums1(5);

// Q NO 25
// Program to Calculate the Power of a Number(using loop only).
// Input: n=5, p=3
// Output: 5 ^ 3 = 125
// Explanation: 5 x 5 x 5 = 125
function powerOfNum(num, pow) {
  return num ** pow;
}
console.log(powerOfNum2(5, 2));

function powerOfNum2(num, pow) {
  res = num;
  for (let i = 1; i <= pow; i++) {
    res = res * num;
  }
  return res;
}

//Q NO 26
// Program to Check Whether a Number is Prime or Not
// Input: 9
// Output: 9 is not a prime no
// Input: 7
// Output : 7 is a prime no
function isPrimeOrNot(n) {
  if (n <= 0) {
    return "not a prime number";
  }
  let flag = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = false;
    }
  }
  return flag ? `${n} is prime` : `${n} is not prime`;
}
console.log(isPrimeOrNot(4));

// Q NO 27
// Program to find LCM of two numbers using while loop
// Input: 15 50
// Output: Lcm of 15 and 50 is 150
function lcmOf2Nums(n1, n2) {
  let max = n1 > n2 ? n1 : n2;
  let min = n1 < n2 ? n1 : n2;
  let LCM = max;
  while (LCM % min !== 0) {
    LCM += max;
  }
  return LCM;
}
console.log(lcmOf2Nums(6, 2));

// Q NO 28
// Program to Display Characters from A to Z Using Loop with count.
// Output: A1 B2 C3 D4 E5 F6 ……. Z26
function displayChars() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    console.log(`${chars[i]}${count}`);
  }
}
displayChars();

// Q NO 29
// Program to find missing number
// Input: n=5(length of array), arr= [5,3,1,4]
// Output: 2 is missing
// Using loop only(you can not use predefined function
function missingNumber(n, arr) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
console.log(missingNumber(7, [1, 2, 3, 4, 5, 6]));

// Q NO 30
// Program to count vowels and consonants in a given String.
// Input: i am ram
// Output: 3 vowels 3 consonants
function countVowelsConsonants(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let string = str.toLowerCase();
  let countOfVowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      countOfVowels++;
    }
  }
  return `count of vowels ${countOfVowels} count of consonants ${
    str.length - countOfVowels
  }`;
}
let name = "SaiKumar";
console.log(countVowelsConsonants(name));

// Q NO 31
// program to insert the elements of an array for specific index.
// Input: [1,2,3,4,5,7,8,9,10] , index=5
// Output: [1,2,3,4,5,6,78,9,10]


// Q NO 32
// Reverse a number using while Loop
// Input: 123
// Output: 321

// Q NO 33
// Count occurrence of number:
// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// Output: 7 present 2 times.

