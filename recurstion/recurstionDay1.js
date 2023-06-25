// 1

// function length(string) {
//   if (string === "") {
//     return 0;
//   } else {
//     return 1 + length(string.slice(1));
//   }
// }



// console.log(length("apple")) // 5
// console.log(length("make")) // 4
// console.log(length("a")) // 1
// console.log(length("")) // 0

// ----------------------------
// 2

function search(arr, item, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === item) {
    return index;
  }
  return search(arr, item, index + 1);
}
// console.log(search([1, 2, 3, 4], 3)); // 2
// console.log(search([2, 4, 6, 8, 10], 8)); // 3
// console.log(search([1, 3, 5, 7, 9], 11)); // -1

// ---------------------------------------
// 3

// function factorial(n){
//   if(n === 0) return 1;
//   return n * factorial(n-1)
// }

// console.log(factorial(5)) // 120
// console.log(factorial(3)) // 6
// console.log(factorial(1)) // 1
// console.log(factorial(0)) // 1

// ------------------------------------------------
// 4

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(3) ) // 6
// console.log(factorial(5) )// 120
// console.log(factorial(13)) // 6227020800

// ------------------------------------------------
// 5

function paths(n) {
  if (n === 0) return 1;
  return n * paths(n - 1);
}

// console.log(paths(4)) // 24
// console.log(paths(1)) // 1
// console.log(paths(9)) // 362880

// --------------------------------------------------
// 6

function doubleFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * doubleFactorial(num - 2);
}

// console.log(doubleFactorial(0)) // 1
// console.log(doubleFactorial(2)) // 2
// console.log(doubleFactorial(9)) // 945
// // 9*7*5*3*1 = 945
// console.log(doubleFactorial(14)) // 645120

// --------------------------------------------------
// 7

// function sumDigit(num){
//   if(num === 1){
//     return 1
//   }else{
//     return num.split("").reduse(ele => ele + ele)
//   }
// }

// console.log(sumDigit(111)) // 3
// // 1 + 1 + 1 = 3
// console.log(sumDigit(222)) // 6
// // 2 + 2 + 2 = 6
// console.log(sumDigit(333)) // 9
// // 3 + 3 + 3 = 9

// ----------------------------
// 8
function sum(arr) {
  if (arr.length === 0) return 0;
  const poping = arr.pop();
  return poping + sum(arr);
}

// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
// console.log(sum([11,2,3,4,5,6,7,8,9,10]));
// console.log(sum([21,2,3,4,5,6,7,8,9,10]));
// console.log(sum([31,2,3,4,5,6,7,8,9,10]));

// ----------------------------
// 9

function noYelling(str) {
  if (str.endsWith("??") || str.endsWith("!!")) {
    return noYelling(str.slice(0, -1));
  }
  return str;
}

// console.log(noYelling("What went wrong?????????")); // "What went wrong?"
// console.log(noYelling("Oh my goodness!!!")); // "Oh my goodness!"
// console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!")); // "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.
// console.log(noYelling("Oh my goodness!")); // "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.
// console.log(noYelling("I just cannot believe it.")); // "I just cannot believe it."



// --------------------------------------


// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.


function sumRange(num){
  if(num === 0){
      return 0;
  }else{
      return num + sumRange(num -1)
  }
}
// console.log(sumRange(3));

// -----------------------------

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(num1,num2){
  if(num2 === 0) return 1;
  return num1 * power(num1 ,num2 -1)
}


// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

// -------------------------------

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.


function factorial(num){
  if(num === 0) return 1;
  return num * factorial(num -1)
}

// console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120


// ------------------------------

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// pending

var allAreLessThanSeven = all([1,2,6], function(num){
return num < 7;
});

// console.log(allAreLessThanSeven); // false

function all(array, callback){
var copy = copy || array.slice(); // shallow copies array

if(copy.length === 0) return true;

if(callback(copy[0])){
  copy.shift(); // remove first element from array
  return all(copy, callback);
} else {
  return false;
}
}

// -------------------------------

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// pending

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

// console.log(six,sixty);

function productOfArray(arr){
 if(arr.length === 0)return 1;
 return arr.shift() * productOfArray(arr)
}

// ------------------------------
// pending

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

function totalIntegers(arr){
  if(arr.length === 0)return 0;
  let sum = 0;
  let firstEl = arr.shift()
  if(Array.isArray(firstEl)){
      sum += totalIntegers(firstEl)
  }else if(Number.isInteger(firstEl)){
      sum += 1;
  }
  return sum + totalIntegers(arr)
}

//-- ----------------------------

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

// pending

var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(arr){
  if(arr.length === 0)return 0;
  let total = 0;
  for(let i = 0 ; i < arr.length ; i++){
      if(Array.isArray(arr[i])){
          total += SumSquares(arr[i])
      }else{
          total += arr[i] * arr[i]
      }
  }
  return total
}

// --------------------------------
// pending

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// Sample:

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate(num1,num2){
  if(num1 <= 0) return [];
  return [num2].concat(replicate(num1 -1, num2))
}