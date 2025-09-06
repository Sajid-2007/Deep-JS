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


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 2. Compilation & Scope

// var teacher = "Kyle";

// function otherClass(){
//   var teacher = "Suzy";
//   console.log("Welcome!"); // Welcome!
//   console.log(teacher); // Suzy
// }

// function ask(){
//   var question = "Why?";
//   console.log(question); // Why?
// }

// otherClass(); // Welcome!
// ask(); // Why?


// // Each function makes its own local scope.

// // - Global : `teacher = “Kyle”`
// // - `otherclass()` create a new `teacher = “Suzy”` that hide the global one inside the function.
// // - `ask()` has its own `question` only visible inside it.

// // Variable are only usable inside the scope where they’re declared.

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dynamic global variables

// // non-strict mode

// // var teacher = "Kyle";

// // function otherClass(){
// //   teacher = "Suzy";
// //   topic = "React";
// //   console.log("Welcome!")
// //   console.log("fn " + topic);
// // }

// // otherClass();

// // console.log(teacher);
// // console.log(topic);


// // strict mode

// "use strict";

// var teacher = "Kyle";

// function otherClass(){
//   teacher = "Suzy";
//   topic = "React";
//   console.log("Welcome!")
//   console.log("fn " + topic);
// }

// otherClass();

// console.log(teacher);
// console.log(topic);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// // 4. Nested Scope

// // nested scope = "scope inside another scope"

// // In JavaScript , every function/block makes its own scope, and inner scopes can see outer variables but outer don't see inner.

// let teacher = "Kyle";

// function outer(){
//   let topic = "JS";

//   function inner(){
//     let forCheckingError = "InnerVar"; 
//     console.log(teacher);
//     console.log(topic);
//   }

//   inner();

//   console.log(forCheckingError); // ReferenceError: forCheckingError is not defined
// }

// outer();

// // outer() is nested in the global scope.
// // inner() is nested inside outer();
// // inner() can use both topic and teacher variables (outer scopes), but outer() can't use inner function variables. (inner scopes)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 5. Undefind vs undeclared
 
// //  undefined - A variable exists but has no value assigned yet.

// let a; // this is declared but not assigned value.

// console.log(a); // undefined because a has no value.


// // undeclared 

// // A variable was never declared in this scope. Accesing it throws a RefrenceError

// console.log(b); // RefrenceError : b is not defined.

////////////////////////////////////////////////////////////////////////////////


// 6. Lexical Scope Elevator

// Lexical scope like an elevator in a building :
//  - When you write the code, JavaScript fixes which "floor" (outer scopes) each function can see.
//  - At runtime, if a variable isn't found on the current floor, the "elevator" goes up floor by floor (outer Scopes) until it finds that variable.
//  - It never goes down into inner floors, because those were created after.

let ground = "G";

function firstFloor(){
    let one = "1";

    function secondFloor(){
        let two = "2";
        console.log(two);    // "2" (current floor)
        console.log(one);    // "1" (1st floor up)
        console.log(ground); // "G" (ground floor)
    }

    secondFloor();
}

firstFloor();

// A function always remembers the scope where it was defined, no matter where you call it.

