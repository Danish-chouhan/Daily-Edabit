// 1
function getFirstValue(arr) {
  //   return arr[0];
  // return arr.shift()
}

// console.log(getFirstValue([1, 2, 3])); // 1
// console.log(getFirstValue([80, 5, 100])); // 80
// console.log(getFirstValue([-500, 0, 50])); // -500

// 2

function makePair(a, b) {
  // return [a,b]
  // return Array.of(a,b)
  // let arr =[]
  // arr.push(a,b)
  // return arr
}

// console.log(makePair(1, 2)) // [1, 2]
// console.log(makePair(51, 21)) // [51, 21]
// console.log(makePair(512124, 215)) // [512124, 215]

// 3

function drop(arr, index) {
  // return arr.slice(index)
  // return arr.splice(index)
  //   let newArr = [];
  //   for(let i = index ; i < arr.length ; i++){
  //     newArr.push(arr[i])
  //   }
  //   return newArr
}

// console.log(drop([1, 2, 3], 1)); // [2, 3]
// console.log(drop([1, 2, 3], 2)); // [3]
// console.log(drop([1, 2, 3], 5)); // []
// console.log(drop([1, 2, 3], 0)); // [1, 2, 3]

// ------------------
// 3

function getVoteCount(obj) {
  //  return obj.upvotes - obj.downvotes
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0

// --------------------
// 4
function reverse(arr) {
  // return arr.reverse()
}

// console.log(reverse([1, 2, 3, 4])) // [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])) // [4, 3, 2, 9, 9]
// console.log(reverse([])) // []

// 5

function incrementItems(arr) {
  // return arr.map(ele => ele + 1)
  // let newArr = []
  // for(let i = 0 ; i < arr.length ; i++){
  //  newArr.push(arr[i]+1)
  // }
  // return newArr
}

// console.log(incrementItems([0, 1, 2, 3])) // [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8])) // [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4])) // [0, -1, -2, -3]

// ----------------
// 6

function getLastItem(arr) {
  //  return arr[2]
  // return arr.pop()
}

// console.log(getLastItem([1, 2, 3])) // 3
// console.log(getLastItem(["cat", "dog", "duck"])) // "duck"
// console.log(getLastItem([true, false, true])) // true

// -----------------
// 7

function arrayToString(arr) {
  // return arr.join("")
  // let newArr = []
  // for(let i = 0 ; i < arr.length ; i++){
  //  let popin = arr[i]
  //  newArr += popin
  // }
  // return newArr
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6])) // "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) // "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) // "123asdAAAA"

// ---------------
// 8

function concat(arr1, arr2) {
  // return arr1.concat(arr2)
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }

  return newArray;
}

// console.log(concat([1, 3, 5], [2, 6, 8])) // [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2])) // [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) // [4, 5, 1, 3, 3, 3, 3, 3]

// ------------
// 9

function findIndex(arr, index) {
  //  return arr.indexOf(index)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
// console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0

// ----------------
// 10

function valueAt(arr, val) {
  let a = Math.floor(val);
  // return arr[a]
  let newArr = 0;
  for (let i = a; i < arr.length; i++) {
    newArr += arr[i];
  }
  return newArr;
}

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) // 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) // 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) // 4

// let arr = ["Danish","Chouhan"]

// let newArr = arr.map(ele => ele.toUpperCase())
// console.log(newArr);

let x = {
  links: {
    self: "http://example.com/articles",
    next: "http://example.com/articles?page[offset]=2",
    last: "http://example.com/articles?page[offset]=10",
  },
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
      },
      relationships: {
        author: {
          links: {
            self: "http://example.com/articles/1/relationships/author",
            related: "http://example.com/articles/1/author",
          },
          data: { type: "people", id: "9" },
        },
        comments: {
          links: {
            self: "http://example.com/articles/1/relationships/comments",
            related: "http://example.com/articles/1/comments",
          },
          data: [
            { type: "comments", id: "5" },
            { type: "comments", id: "12" },
          ],
        },
      },
      links: {
        self: "http://example.com/articles/1",
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "9",
      attributes: {
        firstName: "Dan",
        lastName: "Gebhardt",
        twitter: "dgeb",
      },
      links: {
        self: "http://example.com/people/9",
      },
    },
    {
      type: "comments",
      id: "5",
      attributes: {
        body: "First!",
      },
      relationships: {
        author: {
          data: { type: "people", id: "2" },
        },
      },
      links: {
        self: "http://example.com/comments/5",
      },
    },
    {
      type: "comments",
      id: "12",
      attributes: {
        body: "I like XML better",
      },
      relationships: {
        author: {
          data: { type: "people", id: "9" },
        },
      },
      links: {
        self: "http://example.com/comments/12",
      },
    },
  ],
};
// console.log(x);

// console.log(x.included.map(ele => ele.type));

let a = Math.PI;

// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);

var obj = { value: 1 };
// console.log(obj.value++);
// console.log(obj.value++);
// console.log(obj.value++);
// var realbj = { value: 1 };
function increaseValue(obj) {
  obj.value++;
}

// console.log(increaseValue(realbj),realbj.value);
// console.log(increaseValue(realbj),realbj.value);
// console.log(increaseValue(realbj),realbj.value);
// console.log(increaseValue(realbj),realbj.value);

// /// real obj kyo change hua

function calculateArea(radius) {
  return radius * radius * Math.PI;
}
// console.log(calculateArea(20));
// console.log(calculateArea(30));
// console.log(calculateArea(340));
// console.log(calculateArea(20));

// let newArray = []
// function storingObj(obj){
//   for(let i = 0 ; i < obj.length ; i++){
//     newArray.push(obj[i])
//   }
//   return newArray
// }
// console.log(storingObj(x.type));

// let a = x.included[0].type
// let b = x.included[1].type
// let c = x.included[2].type

// console.log(Array.of(a,b,c));

// -------------------------------------------------------

// let arr = ["Danish","Chouhan"]

// let newArr = arr.map(ele => ele.toUpperCase())
// console.log(newArr);

// const array = [
//   {
//     id: 1,
//     name: "John",
//     age: 25,
//     hobbies: ["reading", "painting", "hiking"],
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA",
//     },
//   },
//   {
//     id: 2,
//     name: "Sarah",
//     age: 30,
//     hobbies: ["cooking", "gardening"],
//     address: {
//       street: "456 Elm St",
//       city: "Los Angeles",
//       country: "USA",
//     },
//   },
//   {
//     id: 3,
//     name: "Michael",
//     age: 20,
//     hobbies: ["photography", "playing guitar"],
//     address: {
//       street: "789 Oak St",
//       city: "London",
//       country: "UK",
//     },
//   },
// ];

// // console.log(array);

// console.log(array.map(ele => ele.name));

// ------------------------
// function fn(arr1,arr2){
// for(var i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }
// }
// function fn2(arr2){
//   return arr2
// }
// let newFn = fn2([])
// console.log(fn([1, 2, 3],newFn));

// Write a function to calculate the sum of all numbers in an array using the reduce method.

function calculate(arr) {
  return arr.reduce((acu, ele) => acu + ele);
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    emptyArr.push(arr[i]);
  }
  return emptyArr.reduce((acu, ele) => acu + ele);
}
// console.log(calculate([1,2,3,4,5]));

// . Write a function that uses reduce to find the maximum number in an array of numbers.

// function maximum(arr){
//   return arr.reduce((acu,ele)=>Math.max(acu,ele))
// }
// console.log(maximum([5,4,3,2,1]));

// 1

// Write a function that uses reduce to find the product of all numbers in an array.

function product(arr) {
  return arr.reduce((acu, ele) => acu * ele);
}
// console.log(product([1,2,3,4,5]));

// 2

// Write a function that uses reduce to count the occurrences of each element in an array.

function occurrences(arr) {
  return arr.reduce((acu, ele) => acu + ele);
}
// console.log(occurrences([1,2,1,1,2,3]));

// function occurrences

// 3

// Write a function that uses reduce to flatten an array of arrays.

let arr = [1, 2, [3, 4], [5, 6]];
function flatten(arr) {
  return arr.reduceRight((acu, ele) => acu.concat(ele));
}
// console.log(flatten(arr));

// ------------------------

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Examples

function findDifference(arr1, arr2) {
  let a = 1;
  for (let i = 0; i < arr1.length; i++) {
    a *= arr1[i];
  }
  let b = 1;
  for (let j = 0; j < arr2.length; j++) {
    b *= arr2[j];
  }

  return Math.abs(a - b);
}

// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ])) // 12040
// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ])) // 276
// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ])) // 405
// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ])) // 5412

// {
//   1: 3,
//   9: 4,
//   'user':2
// }

function occurrences(arr) {
  // const obj = {}
  // for(let i = 0 ; i < arr.length ; i++){
  //   let currentElement = arr[i]
  //   if(currentElement in obj){
  //      obj[currentElement] += 1
  //    }else{
  //     obj[currentElement] = 1
  //    }
  // }
  // return obj
  return arr.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

// console.log(occurrences([1, 9, "user", "user", 9, 9, 1, 9, 1]));

// ------------------------------------------------------

function total(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

// console.log(total([1,2,3])); // 6

// ------------------------------------------------------

function stringConcat(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, "");
}

// console.log(stringConcat([1,2,3])); // "123"

// ------------------------------------------------------

function totalVotes(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    return acc + (curr.voted ? 1 : 0);
  }, 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
// console.log(totalVotes(voters)); // 7

// ------------------------------------------------------
function shoppingSpree(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

// console.log(shoppingSpree(wishlist)); // 227005

// ------------------------------------------------------

function flatten(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// ------------------------------------------------------

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  // your code here
  return arr.reduce(
    (acc, curr) => {
      if (curr.age >= 18 && curr.age <= 25) {
        acc.numYoungPeople++;
        if (curr.voted) {
          acc.numYoungVotes++;
        }
      } else if (curr.age >= 26 && curr.age <= 35) {
        acc.numMidsPeople++;
        if (curr.voted) {
          acc.numMidVotesPeople++;
        }
      } else if (curr.age >= 36 && curr.age <= 55) {
        acc.numOldsPeople++;
        if (curr.voted) {
          acc.numOldVotesPeople++;
        }
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4
}
*/

// ------------------------------------------------------