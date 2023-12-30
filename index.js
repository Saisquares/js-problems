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

function insertAtIndex(value, index, arr) {
  if (index < 0 || index > arr.length) {
    return "enter valid index";
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index - 1) {
      newArr.push(value);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(insertAtIndex(2, 3, [0, 1, 3]));

// Q NO 32
// Reverse a number using while Loop
// Input: 123
// Output: 321
function reversenum(num) {
  let reverseNum = 0;
  while (num !== 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return reverseNum;
}
console.log(reversenum(456));
// Q NO 33
// Count occurrence of number:
// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// Output: 7 present 2 times.
function countValue(value, arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      count++;
    }
  }
  return `${value} present ${count} times`;
}
console.log(countValue(7, [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 7, 9, 10]));

console.log("************* Medium ***************");
//********************** Difficulty Level : Medium ***********************
// Q NO 1
// Write a function that converts an object into an array, where each element
// represents a key-value pair in the form of an array.
// Examples :
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]]
// toArray({}) ➞ []
function object2Arr(obj) {
  let arr = Object.entries(obj);
  return arr;
}
// console.log(object2Arr({ a: 1, b: 2 }))

function objToArr(obj) {
  let arrOfArr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let temp = [keys[i], obj[keys[i]]];
    arrOfArr.push(temp);
  }
  return arrOfArr;
}
console.log(objToArr({ a: 1, b: 2 }));

// Q NO 2
// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num until the array length reaches length.
// Examples :
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
function arrOfMult(num, len) {
  let res = [];
  for (let i = 1; i <= len; i++) {
    res.push(num * i);
  }
  return res;
}
console.log(arrOfMult(7, 5));

// Q NO 3
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Examples :
// getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve", age: 32, budget: 40000 },
//  { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700
getBudgets = [
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
];

function pplBudjet(arr) {
  let budget = 0;
  for (let i = 0; i < arr.length; i++) {
    budget = budget + arr[i].budget;
  }
  return budget;
}
// method 2
function pplBudjet2(arr) {
  let totalBudget = arr.reduce((prev, cur) => {
    return prev + cur.budget;
  }, 0);
  return totalBudget;
}
console.log(pplBudjet2(getBudgets));

// Q NO 4
// Create a function that takes an array of objects like { name: "John", notes:
// [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4
// }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// Example :
// [
//  { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//  { name: "John", avgNote: 4 }
// ]
function avgNotes(arr) {
  let ArrOfobj = [{ name: arr[0].name, avgNote: 0 }];
  let note = arr[0].notes;
  let total = 0;
  for (let i = 0; i < note.length; i++) {
    total += note[i];
  }
  note.length > 0 ? (ArrOfobj[0].avgNote = total / note.length) : 0;
  return ArrOfobj;
}
console.log(avgNotes([{ name: "joe", notes: [1, 2, 8, 9] }]));

// Q NO 5
//Create a function that moves all capital letters to the front of a word.
// Examples :
// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
function capToFront(str) {
  let caps = "";
  let smalls = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str.toUpperCase()[i]) {
      caps += str[i];
    } else {
      smalls += str[i];
    }
  }
  return `${caps + smalls}`;
}
console.log(capToFront("SaiKUmar"));

// Q NO 6
// Count each occurrence of number(can not use predefined function).
// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// Output: 1 present 2 times

function findOccurance(value, arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) count++;
  }
  return `${value} present ${count} times`;
}
console.log(findOccurance(2, [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10]));

// Q NO 7
// Write a function that accepts an array of strings. Return the longest string(can not
//   use predefined function).
//   Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’]
//   Output: Elephant
function longestString(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestString(["nik", "mikhil", "Cow", "Elephant"]));

// Q NO 8
// Most Commonly Used two Character in String(can not use predefined function)
// Input: ‘Hii i am ram’
// Output; i, a

// Q NO 9
// Write Program to remove duplicate elements in an array and sort it in descending
// order(can not use predefined function)
// Input: [5,3,5,2,1,1,7,3,5,6];
// Output: [7,6,5,32,1];
function removeDuplicates(arr) {
  let uniqarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqarr.indexOf(arr[i]) === -1) {
      uniqarr.push(arr[i]);
    }
  }
  for (let j = 0; j < uniqarr.length; j++) {
    for (let k = 0; k < uniqarr.length - j - 1; k++) {
      if (uniqarr[k] < uniqarr[k + 1]) {
        [uniqarr[k + 1], uniqarr[k]] = [uniqarr[k], uniqarr[k + 1]];
      }
    }
  }
  return uniqarr;
}
console.log(removeDuplicates([5, 3, 5, 2, 1, 1, 4, 7, 3, 5, 6]));

// Q NO 10
// Write a Program to Remove brackets from an algebraic expression(can not use
//   predefined function)
//   Input: a + b-(9+c)=3
//   Output: a + b- 9+c=3

// Q NO 11
// Write Program to remove duplicate elements in an array and sort it in Accending
// order(can not use predefined function).
// Input: [Z, A, P, C, A, Z , K, N, C]
// Output: [A, C, K,N, P, Z]

//  Q NO 12
//  If subseq's array sequence is present in the array, returns true or else returns
//  false.
//  Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
//  Example:
//   Input : Subseq1 = [7, -1, 5, -3] Output: true
//   Subseq2 = [7, -1, 4, -3] : false
//   Subseq3 = [ -1] : true
//   Subseq4 = [13, -3, 4, 1] : false


// Q NO 13
// Find sum of the Unique numbers:
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
// The unique numbers are 1,2, 3, 5 so the sum should be 11.
function sumOfUniqNums(arr) {
  if (arr.length < 0) {
    return "check the input";
  }
  let uniqArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  for (let i = 0; i < uniqArr.length; i++) {
    sum += uniqArr[i];
  }
  return sum;
}
console.log(sumOfUniqNums([1, 2, 2, 1, 3, 5, 1]));
