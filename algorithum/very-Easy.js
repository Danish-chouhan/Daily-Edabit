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

// pending

function leapYear(n) {}

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
  
  // panding
  
  function addBinary(n1, n2) {}
  
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
