// 1

function sumPolygon(n){
    return (n - 2) * 180
}
// console.log(sumPolygon(3)) // 180
// console.log(sumPolygon(4)) // 360
// console.log(sumPolygon(6)) // 720


// ------------------
// 2

function nameString(val,str){
    str = "Edabit"
    return val + str
}

// console.log(nameString("Mubashir")) // "MubashirEdabit"
// console.log(nameString("Matt")) // "MattEdabit"
// console.log(nameString("javaScript")) // "javaScriptEdabit"

// ----------------------
// 3

function numArgs(...arg){
    return arg.length
}

// console.log(numArgs()) // 0
// console.log(numArgs("foo")) // 1
// console.log(numArgs("foo", "bar")) // 2
// console.log(numArgs(true, false)) // 2
// console.log(numArgs({})) // 1

// ---------------------
// 4

function invertArray(arr){
   if(arr.length < 1) return
   const arrr = [];
   for(let i = 0 ; i < arr.length ; i++){
   arrr[i] += -arr[i]
  }
  return arrr
}

// console.log(invertArray([1, 2, 3, 4, 5])) // [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5])) // [-1, 2, -3, 4, -5]
// console.log(invertArray([])) // []


// -------------------------
// 5
function mod(dividend, divisor) {
  while (dividend >= divisor) {
    dividend = dividend - divisor;
  }
  return dividend;
}

// console.log(mod(5, 2)) // 1
// console.log(mod(218, 5)) // 3
// console.log(mod(6, 3)) // 0