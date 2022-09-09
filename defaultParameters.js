// 1
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// 2
const increment = (number, value = 1) => number + value;
