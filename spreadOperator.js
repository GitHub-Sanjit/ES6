// 1
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// 2
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// 3
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// 4
// const spreaded = ...arr;
