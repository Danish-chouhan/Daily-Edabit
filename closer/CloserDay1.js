// 1
// function redundant(str) {
//   return function () {
//     console.log(str);
//   };
// }

// const f1 = redundant("apple")
// f1() // "apple"
// const f2 = redundant("pear")
// f2() // "pear"
// const f3 = redundant("")
// f3() // ""

// --------------------
// 2
function makePlusFunction(constantVal) {
  return function (val) {
    return constantVal + val;
  };
}
function plusFive(num) {
  return num + 5;
}
const plusTen = makePlusFunction(10);
// console.log(plusTen(0)); // 10
// console.log(plusTen(188)); // 198
// console.log(plusFive(plusTen(0))); // 15

// ---------------------
// 3

function add_suffix(end) {
  return function (start) {
    return start + end;
  };
}
add_ly = add_suffix("ly");

// console.log(add_ly("hopeless")) // "hopelessly"
// console.log(add_ly("total")) // "totally"

add_less = add_suffix("less");

// console.log(add_less("fear")) // "fearless"
// console.log(add_less("ruth")) // "ruthless"

// ---------------------
// 4

function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

// console.log(add(10)(20)) // 30
// console.log(add(0)(20)) // 20
// console.log(add(-30)(80)) // 50

// ----------------------
// 5

function addsNum(num) {
  return function (num2) {
    return num + num2;
  };
}

const adds1 = addsNum(1);

// console.log(adds1(3)) // 4
// console.log(adds1(5.7)) // 6.7

const adds10 = addsNum(10);

// console.log(adds10(44)) // 54
// console.log(adds10(20)) // 30

// ----------------------------------

function multiply(arr) {
  return function (num) {
    return arr.map((ele) => ele * num);
  };
}

// console.log(multiply([1, 2, 3])(2)) // [2, 4, 6]
// console.log(multiply([4, 6, 5])(10)) // [40, 60, 50]
// console.log(multiply([1, 2, 3])(0)) // [0, 0, 0]

// -----------------------------------

function factory(num) {
  return function (arr) {
    return arr.map((ele) => ele / num);
  };
}

const first = factory(15);
// returns a function first.

// const arr = [30, 45, 60]
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

// console.log(first(arr)) // [2, 3, 4]

const second = factory(2);
// returns a function second.

const arr = [2, 4, 6];
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

// console.log(second(arr)) // [1, 2, 3]

// --------------------------------------

function reverseImage(arr) {
  let newArr = [];
  for (let a of arr) {
    let newElement = [];
    for (let b of a) {
      if (b === 0) {
        newElement.push(1);
      } else {
        newElement.push(0);
      }
    }
    newArr.push(newElement);
  }
  return newArr;
}

// console.log(reverseImage([[1, 0, 0],[0, 1, 0],[0, 0, 1]])) // [[0, 1, 1],  [1, 0, 1],  [1, 1, 0]]
// console.log(reverseImage([[1, 1, 1],[0, 0, 0]])) // [  [0, 0, 0],  [1, 1, 1]]
// console.log(reverseImage([[1, 0, 0],[1, 0, 0]])) // [[0, 1, 1],[0, 1, 1]]

// -------------------------------------------

// pending

function accumulatingArray(arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArr.push(sum);
  }
  return newArr;
}

// console.log(accumulatingArray([1, 2, 3, 4])) // [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulatingArray([1, 5, 7])) // [1, 6, 13]
// console.log(accumulatingArray([1, 0, 1, 0, 1])) // [1, 1, 2, 2, 3]
// console.log(accumulatingArray([])) // []

// -------------------------------------------

function product(a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
}

// console.log(product(1,2)(1,1)(2,3)) // 8
// // 1 * 1 * 2 + 2 * 1 * 3
// console.log(product(10,2)(5,0)(2,3)) // 100
// // 10 * 5 * 2 + 2 * 0 * 3
// console.log(product(1,2)(2,3)(3,4)) // 30
// // 1 * 2 * 3 + 2 * 3 * 4
// console.log(product(1,2)(0,3)(3,0)) // 0
// // 1 * 0 * 3 + 2 * 3 * 0

// ------------------------------------------

const magic = {
  replace: function(str,find,replace){
    return str.replace(find,replace)
  },
  length: function(str){
    return str.length
  },
  trim:function(str){
    return str.trim()
  },
  normalize:function(str,form){
    return str.normalize(form)
  },
  slice:function(arr,num1,num2){
    return arr.slice(num1,num2)
  }
};

// console.log(magic.replace("azerty", "a", "A")); // "Azerty"
// console.log(magic.length("hello word")); // 10
// console.log(magic.trim("  javascript is awesome  ")); // "javascript is awesome"
// console.log(magic.normalize("éèê", "NFD")); // e ́  e ̀  e ̂
// console.log(magic.slice([1, 2, 3, 4, 5], 2, 4)); // [ 3, 4 ]

// -----------------------------------------------

// pending

// f1 = _ => "hello"
// // f1() ➞ "hello"

// f2 = _ => _ => "edabit"
// // f2()() ➞ "edabit"

// f3 = _ => _ => _ => "user"
// // f3()()() ➞ "user"

// funcSort([f2, f3, f1]) ➞ [f1, f2, f3]
// // [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

// funcSort([f1, f2, f3]) ➞ [f1, f2, f3]
// // [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]

// funcSort([f2, "func"]) ➞ ["func", f2]
// // [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]

// -------------------------------------------------

