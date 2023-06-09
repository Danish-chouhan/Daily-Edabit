function calcAge(num) {
  // return 365 * num
}

// console.log(calcAge(65)) // 23725
// console.log(calcAge(0)) // 0
// console.log(calcAge(20)) // 7300

// -----------------------------------------------------------

function nextEdge(n1, n2) {
  return n1 + n2 - 1;
}

// console.log(nextEdge(8, 10)) // 17
// console.log(nextEdge(5, 7)) // 11
// console.log(nextEdge(9, 2)) // 10

// -----------------------------------------------------------

// unnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

function animals(chicken, cows, pigs) {
  return 2 * chicken + 4 * cows + 4 * pigs;
}

// console.log(animals(2, 3, 5)) // 36

// console.log(animals(1, 2, 3)) // 22

// console.log(animals(5, 2, 8)) // 50

// -----------------------------------------------------------
function frames(n1, n2) {
  return 60 * (n1 * n2);
}

// console.log(frames(1, 1)) // 60

// console.log(frames(10, 1)) // 600

// console.log(frames(10, 25)) // 15000

// -----------------------------------------------------------

function makesTen(a, b) {
  if (a + b === 10 || a === 10 || b === 10) {
    return true;
  }
  return false;
}

// console.log(makesTen(9, 10)) // true

// console.log(makesTen(9, 9)) // false

// console.log(makesTen(1, 9)) // true

// -----------------------------------------------------------

function acceptIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised === true) {
    return true;
  }
  return false;
}

// console.log(acceptIntoMovie(14, true)) // true

// console.log(acceptIntoMovie(14, false)) // false

// console.log(acceptIntoMovie(16, false)) // true

// -----------------------------------------------------------
function futurePeople(a, b) {
  return a + b * 360;
}

// console.log(futurePeople(256, 2)) // 976

// console.log(futurePeople(3248, 6)) // 5408

// console.log(futurePeople(5240, 3)) // 6320

// -----------------------------------------------------------

function leapYear(n) {
  if(n % 4 == 0){
    if(n % 100 == 0){
      if(n % 400 == 0){
        return true
      }else{
      return false
      }
    }else{
      return true
    }
  }else{
    return false
  }
}


// console.log(leapYear(2020)) // true

// console.log(leapYear(2021)) // false

// console.log(leapYear(1968)) // true

// -----------------------------------------------------------

function stackBoxes(n) {
  return n * n;
}

// console.log(stackBoxes(1)) // 1

// console.log(stackBoxes(2)) // 4

// console.log(stackBoxes(0)) // 0

// -----------------------------------------------------------
function areaShape(n1, n2, str) {
  if (str === "triangle") {
    return 0.5 * (n1 * n2);
  } else if (str === "parallelogram") {
    return n1 * n2;
  }
}

// console.log(areaShape(2, 3, "triangle")) // 3

// console.log(areaShape(8, 6, "parallelogram")) // 48

// console.log(areaShape(2.9, 1.3,"parallelogram")) // 1

// -----------------------------------------------------------

function carsNeeded(n) {
  return n % 4;
}
// console.log(carsNeeded(5)) // 1

// console.log(carsNeeded(11)) // 3

// console.log(carsNeeded(0)) // 0

// -----------------------------------------------------------

function arrayValuesTypes(arr) {
  return arr.map((ele) => typeof ele);
}

// console.log(arrayValuesTypes([1, 2, "null", []]))// ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))// ["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]

// -----------------------------------------------------------
function stutter(str) {
  return `${str.slice(0, 2)}... ${str.slice(0, 2)}... ${str}?`;
}
// console.log(stutter("incredible")) // "in... in... incredible?"

// console.log(stutter("enthusiastic")) // "en... en... enthusiastic?"

// console.log(stutter("outstanding")) // "ou... ou... outstanding?"

// -----------------------------------------------------------
function ctoa(str) {
  return str.charCodeAt(str);
}

// console.log(ctoa("A")) // 65

// console.log(ctoa("m")) // 109

// console.log(ctoa("[")) // 91

// console.log(ctoa("\\")) // 92

// -----------------------------------------------------------

function addBinary(n1, n2) {
  return (n1 + n2).toString(2)
}

// console.log(addBinary(1, 1)) // "10"

// console.log(addBinary(1, 2)) // "11"

// console.log(addBinary(4, 5)) // "1001"

// -----------------------------------------------------------

function totalCups(n) {
  return Number.parseInt((n += n / 6));
}

// console.log(totalCups(6)) // 7

// console.log(totalCups(12)) // 14

// console.log(totalCups(213)) // 248

// -----------------------------------------------------------
function countDs(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "D" || str[i] === "d") {
      sum += 1;
    }
  }
  return sum;
}

// console.log(countDs("My friend Dylan got distracted in school.")) // 4

// console.log(countDs("Debris was scattered all over the yard.")) // 3

// console.log(countDs("The rodents hibernated in their den.")) // 3

// -----------------------------------------------------------
function evenOrOdd(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  if (sum === 0) {
    return "even";
  } else if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// console.log(evenOrOdd([0])) // "even"

// console.log(evenOrOdd([1])) // "odd"

// console.log(evenOrOdd([])) // "even"

// console.log(evenOrOdd([0, 1, 5])) // "even"

// -----------------------------------------------------------


function programmers(n1, n2, n3) {
  return Math.max(n1,n2,n3) - Math.min(n1,n2,n3)
}

// console.log(programmers(147, 33, 526)) // 493

// console.log(programmers(33, 72, 74)) // 41

// console.log(programmers(1, 5, 9)) // 8

// -----------------------------------------------------------

function areaOfHexagon(n1) {
  const area = (3 * Math.sqrt(3) * Math.pow(n1, 2)) / 2;
  return area.toFixed(1)
}

// console.log(areaOfHexagon(1)) // 2.6

// console.log(areaOfHexagon(2)) // 10.4

// console.log(areaOfHexagon(3)) // 23.4

// -----------------------------------------------------------

function sumCubes(n1) {
  let sum = 0;
  for (let i = 1; i <= n1; i++) {
    sum += i ** 3;
  }
  return sum;
}

// console.log(sumCubes(7)) // 784

// console.log(sumCubes(8)) // 1296

// console.log(sumCubes(9)) // 2025

// -----------------------------------------------------------

function nTablesPlusOne(n) {
  let str = '' 
  for(let i = 1 ; i <= 10 ; i++){
    str += (n) * i + 1 + ","
   }
  return str
}

// console.log(nTablesPlusOne(7)) // "8,15,22,29,36,43,50,57,64,71"

// console.log(nTablesPlusOne(1)) // "2,3,4,5,6,7,8,9,10,11"

// console.log(nTablesPlusOne(3)) // "4,7,10,13,16,19,22,25,28,31"

// -----------------------------------------------------------

function ageDifference(n1, n2) {
  return Math.abs(n1 - (n2 * 2)) 
}

// console.log(ageDifference(36, 7)) // 22
// 22 years from now, the father will be 58 years old and his son will be 29 years old.

// console.log(ageDifference(55, 30)) // 5
// 5 years ago, the father was 50 years old and his son was 25 years old.

// console.log(ageDifference(42, 21)) // 0

// -----------------------------------------------------------

function largestNumbers(n1, arr) {
  let sorting = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = sorting.length - n1; i < sorting.length; i++) {
    newArr.push(sorting[i]);
  }
  return newArr;
}

// console.log(largestNumbers(2, [4, 3, 2, 1])) // [3, 4]

// console.log(largestNumbers(1, [7, 19, 4, 2])) // [19]

// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // [16, 18, 57]

// console.log(largestNumbers(0, [1, 3, 4, 2])) // []

// -----------------------------------------------------------
function justAnotherSumProblem(n1, n2) {
  let sum = 0;
  if (n1 < 0) {
    for (let i = -n1; i > n2; i--) {
      sum += -i;
    }
    return sum;
  }
  for (let i = n2; i <= n1; i++) {
    sum += i;
  }
  return sum;
}

// console.log(justAnotherSumProblem(-10, 1)); // -54

// console.log(justAnotherSumProblem(-20, 5)); // -195

// console.log(justAnotherSumProblem(90, 45)); // 3105

// -----------------------------------------------------------
function centuryFromYear(n1) {
  if (n1 >= 1801 && n1 <= 1900) {
    return 19;
  } else if (n1 >= 1901 && n1 <= 2000) {
    return 20;
  } else if (n1 >= 2001 && n1 <= 3000) {
    return 21;
  }
}

// console.log(centuryFromYear(2005)) // 21

// console.log(centuryFromYear(1950)) // 20

// console.log(centuryFromYear(1900)) // 19

// -----------------------------------------------------------
function sumDigits(n1) {
  let str = `${n1}`;
  return str.length;
}

// console.log(sumDigits(100)) // 3

// console.log(sumDigits(1000)) // 4

// console.log(sumDigits(1)) // 1

// -----------------------------------------------------------
function multiplyByLength(arr) {
  // return arr.map(ele => ele * arr.length)
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr.length);
  }
  return newArr;
}

// console.log(multiplyByLength([2, 3, 1, 0])) // [8, 12, 4, 0]

// console.log(multiplyByLength([4, 1, 1])) // ([12, 3, 3])

// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])) //  [7, 0, 21, 21, 49, 14, 7]

// console.log(multiplyByLength([0])) // ([0])

// -----------------------------------------------------------
function getDiscounts(arr, str) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push((arr[i] * parseFloat(str)) / 100);
  }
  return newArr;
}

// console.log(getDiscounts([2, 4, 6, 11], "50%")) // [1, 2, 3, 5.5]

// console.log(getDiscounts([10, 20, 40, 80], "75%")) // [7.5, 15, 30, 60]

// console.log(getDiscounts([100], "45%")) // [45]

// -----------------------------------------------------------


function middleEarth(arr) {
 let sam = arr.indexOf("Sam")
 let Frodo = arr.indexOf("Frodo")
 return Math.abs(sam - Frodo) === 1
}

console.log(middleEarth(["Frodo", "Sam", "Gandalf"])) // true

console.log(middleEarth(["Frodo", "Saruman", "Sam"])) // false

console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])) // true