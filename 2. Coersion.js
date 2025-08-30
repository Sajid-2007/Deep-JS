// Coersion

// // 1. Abstract Operations

// // Definition  : Abstract operations are internal helper functions defined in the ECMAScript specification.

// // They are not real functions in JS code (we cannot call them directly).

// // They are hidden steps the engine follows when executing code.

// // (a) toPrimitive

// // it‘s an abstract operation that converts an object - a primitive value (`string`, `number`, `boolean`, etc).

// // JS uses it automatically when object is used in a place where a primitive is needed.

// // Example :

// let objectt = {
//   valueOf() {
//     return 10;
//   },
//   toString(){
//     return "hello";
//   }
// };

// console.log(objectt + 5); // 15 (toPrimitive uses valueOf - 10)
// console.log(String(objectt)); // "hello" (toPrimitive uses toString))

// // Step by Step Explanation 

// // 1. `objectt + 5` 
// // - The `+` operator is used.
// // - One side is an object, the other is a number — JS decides it a number context.
// // - The `toPrimitive` abstract operation runs with `"number"` hint.

// // Process :

// // - First, it calls `valueOf()` .
// // - `valueOf()` returns 10 (a primitive value).
// // - So JS uses that directly.
// // - `10+5  = 15`
// // - Output - `15`

// // 1. `String(objectt)` 
// // - Here we explicitly want a string.
// // - The `toPrimitive` operation runs with `“string”` hint.

// // Process :

// // - it first calls `toString()` .
// // - `toString()` returns `“hello”`  (a primitive value).
// // - So JS uses `“hello”` .
// // - Output : `“hello”`





// (b) toString()



