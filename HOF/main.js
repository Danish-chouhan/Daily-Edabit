function arrayValuesTypes(arr) {
  return arr.map((ele) => typeof ele);
}

// console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]

// ---------------------------------------------

function oddSum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    newArr.push(sum % 2 === 0);
  }
  return newArr;
}

// console.log(oddSum([11, 15, 6, 8, 9, 10])); // [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6])); // [false, false, false, false, false]

// -----------------------------------------------

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

function minimumRemovals(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i]
  }
  if(num % 2 === 0){
    return 0
  }else{
    return 1
  }
}

// console.log(minimumRemovals([1, 2, 3, 4, 5])); // 1
// console.log(minimumRemovals([5, 7, 9, 11])); // 0
// console.log(minimumRemovals([5, 7, 9, 12])); // 1

// ----------------------------------------

function whichIsLarger(f, g) {
  let a = f();
  let b = g();
  if (a > b) {
    return "f";
  } else if (a < b) {
    return "g";
  } else {
    return "neither";
  }
}

// console.log(whichIsLarger(() => 5,() => 10)); // "g"
// console.log(whichIsLarger(() => 25,() => 25 )); // "neither"
// console.log(whichIsLarger(() => 505050,() => 5050)); // "f"

// -----------------------------------------

function asciiCapitalize(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

// console.log(asciiCapitalize("to be or not to be!")) // "To Be oR NoT To Be!"
// console.log(asciiCapitalize("THE LITTLE MERMAID")) // "THe LiTTLe meRmaiD"
// console.log(asciiCapitalize("Oh what a beautiful morning.")) // "oH wHaT a BeauTiFuL moRNiNg."

// ----------------------------------------

function asciiCapitalize(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

// console.log(asciiCapitalize("to be or not to be!")); // "To Be oR NoT To Be!"
// console.log(asciiCapitalize("THE LITTLE MERMAID")); // "THe LiTTLe meRmaiD"
// console.log(asciiCapitalize("Oh what a beautiful morning.")); // "oH wHaT a BeauTiFuL moRNiNg."

// -------------------------------------

function makePlusFunction(baseNum) {
  return function (newArg) {
    return baseNum + newArg;
  };
}

// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5);
// console.log(plusFive(2)) // 7
// console.log(plusFive(-8)) // -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10);
// console.log(plusTen(0)) // 10
// console.log(plusTen(188)) // 198
// console.log(plusFive(plusTen(0))) // 15

// ------------------------------------

function add_suffix(str1) {
  return function (str2) {
    return str2 + str1;
  };
}

add_ly = add_suffix("ly");

// console.log(add_ly("hopeless")) // "hopelessly"
// console.log(add_ly("total")) // "totally"

add_less = add_suffix("less");

// console.log(add_less("fear")) // "fearless"
// console.log(add_less("ruth")) // "ruthless"

// --------------------------------------

function add(n1) {
  return function (n2) {
    return n1 + n2;
  };
}
// console.log(add(10)(20)) // 30
// console.log(add(0)(20)) // 20
// console.log(add(-30)(80)) // 50

// --------------------------------------

function addsNum(n1) {
  return function (n2) {
    return n1 + n2;
  };
}

const adds1 = addsNum(1);

// console.log(adds1(3)) // 4
// console.log(adds1(5.7)) // 6.7

const adds10 = addsNum(10);

// console.log(adds10(44)) // 54
// console.log(adds10(20)) // 30

// -------------------------------------------

function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
      return false;
    }
    if (arr[i] % 2 === 0 && i % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // false
// Index 2 has an odd number 9.
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // false
// Index 3 has an even number 8.

// -------------------------------------------

function specialReverse(str, char) {
  return str
    .split(" ")
    .map((ele) => {
      if (ele.includes(char)) {
        return ele.split("").reverse().join("");
      } else {
        return ele;
      }
    })
    .join(" ");
}

// console.log(specialReverse("word searches are super fun", "s")) // "word sehcraes are repus fun"
// console.log(specialReverse("first man to walk on the moon", "m")) // "first nam to walk on the noom"
// console.log(specialReverse("peter piper picked pickled peppers", "p")) // "retep repip dekcip delkcip sreppep"

// ---------------------------------------------

// pending

function warOfNumbers(arr) {}

// console.log(warOfNumbers([2, 8, 7, 5])) // 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2
// console.log(warOfNumbers([12, 90, 75])) // 27
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])) // 168

// --------------------------------------------

// pending

function transformUpvotes(str) {
  let a = str.split(" ").map((ele) => {
    if (ele.includes("k")) {
      let a = ele.split("");
      return a;
    } else {
      return ele;
    }
  });
  let newStr = "";
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "k") {
      newStr += "00";
      newArr.push(newStr);
    } else {
      newStr += a[i];
      newArr.push(newStr);
    }
  }
  return newArr.join("");
}

// console.log(transformUpvotes("6.8k 13.5k")) // [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32")) // [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992")) // [20300, 3800, 7700, 992]

// --------------------------------------------------

