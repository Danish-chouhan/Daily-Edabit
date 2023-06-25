// 1. Write a function to calculate the sum of all numbers in an array using the reduce method.

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
// console.log(sum([1,2,3,4,5]));

// 2. Write a function that uses reduce to find the maximum number in an array of numbers.

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  }, 0);
}
// console.log(sum([1,6,2,3,4,5]));

// 3. Write a function that uses reduce to find the product of all numbers in an array.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       return acc * curr
//     },1)
// }
// console.log(sum([1,2,3,4,5]));

// 4.  Write a function that uses reduce to count the occurrences of each element in an array.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//        if(curr in acc){
//         acc[curr] += 1
//        }else{
//         acc[curr] = 1
//        }
//        return acc
//     },{})
// }
// console.log(sum([1,2,3,4,5,1,1,1,1]));

// 5. Write a function that uses reduce to flatten an array of arrays.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       return acc.concat(Array.isArray(curr)? sum(curr) : curr)
//     },[])
// }

// console.log(sum([1,2,3,4,5,[1,1,1,2,3,4],6,7]));

// 6. Using the reduce method, write a function that transforms an array into an object where each element in the array becomes a property in the object.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       acc[curr] = curr
//       return acc
//     },{})
// }
// console.log(sum([1,2,3,4,5]));

// 7. Write a function that uses reduce to filter out unique elements from an array.

// 8. Write a function that uses reduce to return the average of an array of numbers.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       return acc + curr
//     },0)/arr.length
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10,11]));

// 9. Write a function that uses reduce to create a sentence from an array of words.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       return acc + curr
//     },"")
// }
// console.log(sum(["D","A","N","I","S","H"]));

// 10. Write a function that uses reduce to return the length of the longest string in an array.

// function sum(arr){
//     return arr.reduce((acc,curr)=>{
//       return (curr.length > acc)? curr.length : acc
//     },0)
// }

// console.log(sum(["Danish","Chouhan","DIF","ojhg ghmn hbnm,"]));

// 11. Write a function that uses reduce to implement a simple version of map.

// function map(arr,symb){
//     return arr.reduce((acc,curr)=>{
//       if(symb === "+"){
//        return (acc + curr)
//       }else if(symb === "-"){
//        return acc - curr
//       }else if(symb === "*"){
//        return acc * curr
//       }else if(symb === "/"){
//       return acc / curr
//       }
//     },0)
// }
// console.log(map([1,2,3,4,5,6],"+"));
// console.log(map([1,2,3,4,5,6],"-"));
// console.log(map([1,2,3,4,5,6],"*"));
// console.log(map([1,2,3,4,5,6],"/"));

// 12. Write a function that uses reduce to implement a simple version of filter.

// 11 => Designing Rugs
// Write a function that accepts the height and width (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples



// const a = +0
// const b = -0
// console.log(a===b);



const a = ()=> 1
const b = ()=> 2
const c = ()=> 3
// console.log((a(),b(),c()));


// 13 => Sum of Missing Numbers
// Create a function that returns the sum of missing numbers from the given list.


function sum_missing_numbers(arr){
  let sorting = arr.sort((a,b)=> a -b)
  let Min =  Math.min(...arr)
  let Max =  Math.max(...arr)
  let newArr = []
  for(let i = Min ; i <= Max ; i++){
    newArr.push(i)
  }
 return sorting
}

// Examples
// console.log(sum_missing_numbers([4, 3, 8, 1, 2])) // 18
// # 5 + 6 + 7 = 18

// console.log(sum_missing_numbers([17, 16, 15, 10, 11, 12])) // 27
// # 13 + 14 = 27

// console.log(sum_missing_numbers([1, 2, 3, 4, 5])) // 0

// # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// Notes
// The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).

// // Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// // Examples
// // halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// // halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// // halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

function halfQuarterEighth(arr) {
  let index1 = arr / 2
  let index2 = index1 / 2 
  let index3 = index2 / 2
  return Array.of(index1,index2,index3)
}

// console.log(halfQuarterEighth(6));
// console.log(halfQuarterEighth(22));
// console.log(halfQuarterEighth(25));

// ow to slove this question


// recurstion
