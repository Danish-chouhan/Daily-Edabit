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
  