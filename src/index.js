// var, let and const
// variable declaration in JS

// var url = 10; // number

// url = "Rohan"; // string
// console.log(url);

// // function myFunc() {
// //   var one = "variable one";
// //   console.log(one);
// // }

// // myFunc()
// // console.log(one)

// //problem with var

// var counter = 1;

// if (counter > 0) {
//   var url = 5000;
// }

// console.log(url);

// let and const

// let url = "google.com";
// url = "facebook.com";

// const constVariable = 10;
// constVariable = "absurd";

// solve the problem with var using let

// let url = "google.com";
// let counter = 1;

// if (counter > 0) {
//   let url = 50;
//   console.log(url);
// }

// console.log(url);

// javascript types

// let num = 2;
// let str = "rohan";
// let obj = { name: "Rohan" }; // [1,2,3,'rohan']
// let bool = true; //false
// let val = null;
// let someOtherValue; // undefined

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof obj);
// console.log(typeof bool);
// console.log(typeof val);
// console.log(typeof someOtherValue);

// double equal and triple equal

// console.log("123" == 123); // true
// console.log("123" === 123); // false

// console.log("123" + 321); //  123321
// console.log("1" - 1); //  0

// console.log(Number("123"));
// console.log(Number("123abc"));
// console.log(Number(" 123  "));
// console.log(Boolean("absd"));
// console.log(Boolean(""));
// console.log(String(undefined));

// conditionals and loops

// if (true) {
//   //then this will run
// } else if (true) {
//   //then this will run
// } else {
//   //then this will run
// }

// let i = 0;

// switch (i) {
//   case 0:
//     console.log(i);
//     break;
//   default:
//     console.log("default");
// }

// for (let i = 0; i < 5; i++) console.log(i);
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// Strings, Arrays and Object

// let str = "a";
// let str = "string variable";
// let str = `string variable`;

// console.log(str[100]);

//strings are immutable
// str[0] = "r";

// methods on string: toUpperCase, slice, split

// console.log(str.toUpperCase());
// console.log(str.slice(1, 2));
// console.log(str.split(' '));

// let arr = [1, 2, 4, 45, 6];

// let arr1 = new Array(5);

//arrays are mutable
// arr1[0] = 45;
// console.log(arr1);

//methods on array: push, pop, splice

// console.log(arr.push(100)); // push 100 at the end
// console.log(arr); // [1,2,4,45,6,100]
// console.log(arr.pop()); // pop the last element and return it
// console.log(arr); // [1,2,4,45,6]

// console.log(arr.splice(2, 2)); // [4,45]
// console.log(arr); // [1,2,6]

// let object = {
//   name: { first: "Rohan", last: "Mehta" },
//   city: "lucknow",
//   age: 10
// };

// console.log(object)

// methods for object

// console.log(Object.keys(object));
// console.log(Object.values(object));
// console.log(Object.entries(object));

//functions

// simple functions

// function myFunc(name) {
//   return name;
// }

// let funcVal = myFunc("Rohan");
// console.log(funcVal);

// simple functions with default arguments

// function myFunc(name = "Some name") {
//   return name;
// }

// let funcVal = myFunc();
// console.log(funcVal);

// Function expressions and anonymous functions

// let myfunc = function(name) {
//   return name;
// };

// let val = myfunc("Rohan");
// console.log(val);

// conditional functions

// let val = true;
// if (val) {
//   function sayName(name) {
//     console.log(name);
//   }
// } else {
//   function sayName(name) {
//     console.log(name);
//   }
// }

// sayName("Rohan"); // this throw undefined error

// solution of above error

// let val = false;

// let sayName;

// if (val) {
//   sayName = function(name) {
//     console.log(name);
//   };
// } else {
//   sayName = function(name) {
//     console.log(name);
//   };
// }

// sayName("Rohan");

// callback functions

// function callback(err, name) {
//   console.log(err, name);
// }

// function loadScript(name, cb) {
//  cb(false, name);
// }

// loadScript("rohan.js", callback)

// API example
// function ownSuccess(data) {
//   // my logic to use the data
//   console.log(data);
// }
// function ownError(err) {
//   console.log(err);
// }

// $.getJSON({
//   url: "https://api.github.com/users/rhnmht30",
//   success: ownSuccess,
//   error: ownError
// });

// ES6 syntax

// template string

// let num = 12;
// let str = `string variable is ${num}`;

// console.log(str);

// destructuring arrays and objects

// function returnArray() {
//   return [1, "Rohan"];
// }

// let [num, name] = returnArray();

// console.log(num);
// console.log(name);

// function returnObject() {
//   return { first: "Rohan", last: "Mehta" };
// }

// let { first, last } = returnObject(); // we need to use the same key name
// let { first: firstName, last: lastName } = returnObject(); // if we need to use different variable names

// console.log(first, last);
// console.log(firstName, lastName);

// spread operator

// issue of copying array
// let arr = [1, 2, 4, 5];
// let newarr = arr;
// console.log(newarr.push(6));

// console.log(arr); // this should not change when we update newarr

// solve the above problem using spread

// let arr = [1, 2, 4, 5];

// let newarr = [...arr];

// console.log(newarr.push(6));
// console.log(arr);

// rest operator

// function sum(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// }

// let result = sum(1, 2, 4);
// console.log(result);

// arrow functions

// basic function definition
// let myFunc = function() {
//   return "Rohan";
// };

// let result = myFunc();

// console.log(result);

// change it to arrow functions
// let myFunc = (name, num) => ({ name: name, num: num }); // single return expression
// let myFunc1 = (name, num) => {
//   // multi-line code
//   // after executing return
//   return { name: name, num: num };
// };

// let result = myFunc("Rohan", 2);
// console.log(result);

// Promises and Async/Await

// API example with promises

// Promise is something someone will return to us
// it can have 3 states
// 1. pending
// 2. resolved
// 3. rejected

// let returned = fetch("https://api.github.com/users/rhnmht30");

// console.log(returned); // Promise<pending>

// fetch("https://api.github.com/users/rhnmht30")
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

// improve the above using ES6
// fetch("https://api.github.com/users/rhnmht30")
//   .then(res => {
//     return res.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// $.getJSON({
//   url: "https://api.github.com/users/rhnmht30",
//   success: ownSuccess,
//   error: ownError
// });

// Async/ Await

document.querySelector(".btn").addEventListener("click", async function(event) {
  event.preventDefault();
  //send the request to github api
  let res = await fetch("https://api.github.com/users/rhnmht30");
  let data = await res.json();
  console.log(data);
});
