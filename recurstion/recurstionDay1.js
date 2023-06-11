// 1

function length(string) {
  if (string === "") {
    return 0;
  } else {
    return 1 + length(string.slice(1));
  }
}

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

console.log(noYelling("What went wrong?????????")); // "What went wrong?"
console.log(noYelling("Oh my goodness!!!")); // "Oh my goodness!"
console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!")); // "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.
console.log(noYelling("Oh my goodness!")); // "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.
console.log(noYelling("I just cannot believe it.")); // "I just cannot believe it."
