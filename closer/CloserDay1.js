// 1
function redundant(str) {
  return function () {
    console.log(str);
  };
}

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

function add_suffix(end){
    return function(start){
        return start + end
    }
}
add_ly = add_suffix("ly")

// console.log(add_ly("hopeless")) // "hopelessly"
// console.log(add_ly("total")) // "totally"


add_less = add_suffix("less")

// console.log(add_less("fear")) // "fearless"
// console.log(add_less("ruth")) // "ruthless"

// ---------------------
// 4


function add(num1){
    return function(num2){
        return num1 + num2
    }
}

// console.log(add(10)(20)) // 30
// console.log(add(0)(20)) // 20
// console.log(add(-30)(80)) // 50


// ----------------------
// 5

function addsNum(num){
    return function(num2){
        return num + num2
    }
}

const adds1 = addsNum(1)

// console.log(adds1(3)) // 4
// console.log(adds1(5.7)) // 6.7

const adds10 = addsNum(10)

// console.log(adds10(44)) // 54
// console.log(adds10(20)) // 30