// // 1. Scope

// // Scope means “where in the code a variable is visible or accessible”.

// // Types Of Scope

// // (A) Global Scope
// // The Variables declared outside any function or block.
// // This Variables accessible everywhere.

// let a = 10; // global
// console.log(a); // 10

// // (B) Function Scope
// // The Variables declared inside a function are visible only inside that function.

// function test() {
//   let b = 5; // local
//   console.log(b); // 5
// }
// // console.log(b); // ❌ error

// // (C) Block Scope (let & const)
// // The Variables inside  {} with let or const are visible only in that block.

// if (true) {
//   let c = 7;
//   console.log(c); // 7
// }
// // console.log(c); // ❌ error

// // (D) Lexical Scope
// // Inner function can use variables from outer functions (but not the other way). (Closure)*

// function outer() {
//   let x = 42;
//   function inner() {
//     console.log(x); // can access outer's variable
//   }
//   inner();
// }
// outer();


//////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Compilation & Scope

var teacher = "Kyle";

function otherClass(){
  var teacher = "Suzy";
  console.log("Welcome!"); // Welcome!
  console.log(teacher); // Suzy
}

function ask(){
  var question = "Why?";
  console.log(question); // Why?
}

otherClass(); // Welcome!
ask(); // Why?


// Each function makes its own local scope.

// - Global : `teacher = “Kyle”`
// - `otherclass()` create a new `teacher = “Suzy”` that hide the global one inside the function.
// - `ask()` has its own `question` only visible inside it.

// Variable are only usable inside the scope where they’re declared.



// 3. 