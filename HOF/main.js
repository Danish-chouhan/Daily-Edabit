// pending becouse i dont know how to do this with HOF

function arrayValuesTypes(arr) {
  return arr.map((ele) => typeof ele);
}

// console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]

// ---------------------------------------------

// pending for some reason

function oddSum(arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
    let target = sum % 2 === 0 ? true : false;
    console.log(sum);
    newArr.push(target);
  }
  return newArr;
}

// console.log(oddSum([11, 15, 6, 8, 9, 10])); // [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6])); // [false, false, false, false, false]

// -----------------------------------------------

// pending becouse the ans is not from HOF

function addEnding(arr, str) {
  // let newArr = []
  // for(let i = 0 ; i < arr.length ; i++ ){
  //  newArr.push(arr[i]+str)
  // }
  // return newArr
  return arr.map((ele) => ele + str);
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")); // ["cleverly", "meekly", "hurriedly", "nicely"]
// console.log(addEnding(["new", "pander", "scoop"], "er")); // ["newer", "panderer", "scooper"]
// console.log(addEnding(["bend", "sharpen", "mean"], "ing")); // ["bending", "sharpening", "meaning"]

// --------------------------------------------

function additiveInverse(arr) {
  //   let newArr = [];
  //   for(let i = 0 ; i < arr.length ; i++){
  //     if(arr[i] < 0){
  //         newArr.push(arr[i] - arr[i] - arr[i])
  //     }else if(arr[i]>0){
  //         newArr.push(arr[i] - arr[i] - arr[i])
  //     }
  //   }
  //   return newArr
  return arr.map((ele) => -ele);
}

// console.log(additiveInverse([5, -7, 8, 3])); // [-5, 7, -8, -3]
// console.log(additiveInverse([1, 1, 1, 1, 1])); // [-1, -1, -1, -1, -1]
// console.log(additiveInverse([-5, -25, 35])); // [5, 25, -35]

// ---------------------------------------------

function existsHigher(arr, num) {
  return arr.some((ele) => ele >= num);
}

// console.log(existsHigher([5, 3, 15, 22, 4], 10)) // true
// console.log(existsHigher([1, 2, 3, 4, 5], 8)) // false
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) // true
// console.log(existsHigher([], 5)) // false

// -----------------------------------------------

function filterDigitLength(arr, n) {
  return arr.filter((ele) => String(ele).length === n);
}

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) // [232, 555]
// // Include only numbers with 3 digits.
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) // [2, 7, 8, 9]
// // Include only numbers with 1 digit.
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) // []
// // No numbers with only 1 digit exist => return empty array.
// console.log(filterDigitLength([5, 6, 8, 9], 1)) // [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.

// -----------------------------------------------

function evenOddPartition(arr) {
  // return arr.reduce((acc,curr)=>{
  //  curr % 2 == 0 ? acc[0].push(curr) : acc[1].push(curr)
  //  return acc
  // },[[],[]])

  let c = [[], []];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? c[0].push(arr[i]) : c[1].push(arr[i]);
  }
  return c;
}

// console.log(evenOddPartition([5, 8, 9, 2, 0])) // [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0])) // [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9])) // [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([])) // [[], []

// ----------------------------------------------

function getExtension(arr) {
  // let newArr = []
  // for(let i = 0 ; i < arr.length ; i++){
  //  newArr.push(arr[i].split(".").pop())
  // }
  // return newArr
  return arr.map((ele) => ele.split(".").pop());
}

// console.log(getExtension(["code.html", "code.css"])) // ["html", "css"]
// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])) // ["jpg", "pdf", "mp3"]
// console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])) // ["rb", "cpp", "py", "js"]

// -----------------------------------------
// pending

function minimumRemovals(arr) {}

// minimumRemovals([1, 2, 3, 4, 5])) // 1

// minimumRemovals([5, 7, 9, 11])) // 0

// minimumRemovals([5, 7, 9, 12])) // 1

// ----------------------------------------

function whichIsLarger(f, g) {
  let a = f()
  let b = g()
  if(a > b){
    return "f"
  }else if(a < b){
    return "g"
  }else{
    return "neither"
  }
}

// console.log(whichIsLarger(() => 5,() => 10)); // "g"
// console.log(whichIsLarger(() => 25,() => 25 )); // "neither"
// console.log(whichIsLarger(() => 505050,() => 5050)); // "f"
