// 1

function lessThanOrEqualToZero(num){
    if(num <= 0)return true
    else return false
}

// console.log(lessThanOrEqualToZero(5)) // false
// console.log(lessThanOrEqualToZero(0)) // true
// console.log(lessThanOrEqualToZero(-2)) // true

// ------------------
// 2

function isSameNum(num1,num2){
    if(num1 === num2) return true
    else return false
}
// console.log(isSameNum(4, 8)) // false
// console.log(isSameNum(2, 2)) //  true
// console.log(isSameNum(2, "2")) // false


// ------------------
// 3

function profitableGamble(prob,prize,pay){
    if((prob * prize)> pay) return true
    else return false
}
// console.log(profitableGamble(0.2, 50, 9)) // true
// console.log(profitableGamble(0.9, 1, 2)) // false
// console.log(profitableGamble(0.9, 3, 2)) // true


// -------------------
// 4

function boolToString(flag){
    if(flag) return "true"
    else return "false"
}

// console.log(boolToString(true)) // "true"
// console.log(boolToString(false) )// "false"

// -------------------
// 5

function greeting(name) {
    if(name == "Mubashir") {
        return "Hello, my Love!";
    }
    return "Hello, " + name + "!";
  }

// console.log(greeting("Matt")) // "Hello, Matt!"
// console.log(greeting("Helen")) // "Hello, Helen!"
// console.log(greeting("Mubashir")) // "Hello, my Love!"
