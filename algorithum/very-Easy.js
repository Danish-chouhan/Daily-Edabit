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
