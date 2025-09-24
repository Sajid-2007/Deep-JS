// // 1. Lexical Scope

// var teacher = "Kyle";

// function otherClass(){
//   var teacher = "Suzy";
  
//   function ask(question){
//     console.log(teacher, question);
//   }
  
//   ask("Why?");
// }

// otherClass();

// //Output : "Suzy Why?" Because of Lexical Scope

/////////////////////////////////////////////////////////////////////////////////////////////

// // 2. Dynamic Scope

// var teacher = "Kyle";

// function ask(question){
//   console.log(teacher, question);
// }

// function otherClass(){
//   var teacher = "Suzy";
//   ask("Why?")
// }

// otherClass(); // If JS Support dynamic scope then will be "Suzy Why?"
// // Actual Output is "Kyle Why?" because 
// // JS Lexical Scope.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 3. IIFE (Immediately invoked function expression)
// // A function that runs immediately after it’s defined,  often used to create private scope and avoid global pollution.


// (function() {
//   let msg = "Hello";
//   console.log(msg);
// })();

// console.log(msg); // Error, not defined

////////////////////////////////////////////////////////////////////////////////////////////////////

// // 4. Block Scoping

// function diff(x,y){
//   if(x > y){
//     let temp = x; // temp = 6
//     x = y; // x = 5
//     y = temp; // y = 6
//   }  
  
//   return console.log(y - x); //  6 - 5
// }

// diff(6, 5);


// {
//   let x = 10;
//   const y = 20;
//   var z = 30;
// }

// console.log(typeof x); //  Error (x is not defined)
// console.log(typeof y); //  Error (y is not defined)
// console.log(typeof z); //  30 (var block scope follow nahi karta)


// function formatStr(str){
//   {
//     let prefix, rest;
//     prefix = str.slice(0, 3);
//     rest = str.slice(3);
//     str = prefix.toUpperCase() + rest;
//   }

//   if(/^SHA:/.test(str)){ // checkerr 
//     return str;
//   }

//   return str.slice(4);
// }

// console.log(formatStr("my: world"));


// const

// var teacher = "Suzy";
// teacher = "Kyle"; // OK

// const myTeacher = teacher;
// myTeacher = "Suzy"; // TypeError (because we cannot re-declare and re-update to const)

// const teachers = ["Kyle", "Suzy"];
// teacher[i] = "Brian"; // Allowed!



// 5. Hoisting

// JavaScript moves variables and declarations to the top of their scope before running the code.

// // 1
// teacher();

// function teacher() {
//   return console.log("Kyle");
// }

// var otherTeacher;

// // teacher();
// otherTeacher();

// otherTeacher = function (){
//   return "Suzy";
// } 

// // 2
// var teacher = "Kyle";
// otherTeacher();

// function otherTeacher(){
//   console.log(teacher);
//   var teacher = "Suzy";
// }


// //3 var hoisting

// teacher = "Kyle";
// var teacher;

// getTeacher();

// function getTeacher(){
//   return console.log(teacher)
// }


// // 4 let doesn't hoist

// {
//   console.log(teacher);
//   let teacher = "Kyle";
// }

// var teacher = "Kyle";

// {
//   console.log(teacher);
//   let teacher = "Kyle";
// }