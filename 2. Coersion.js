// Coersion

// // 1. Abstract Operations

// // Definition  : Abstract operations are internal helper functions defined in the ECMAScript specification.

// // They are not real functions in JS code (we cannot call them directly).

// // They are hidden steps the engine follows when executing code.

// // (a) ToPrimitive

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





// (b) ToString()


// (c) ToNumber

// (d) ToBoolean

/////////////////////////////////////////////////////////////////////////////

// 2. Cases of Coersion

/////////////////////////////////////////////////////////////////////////////

// 3. Boxing

/////////////////////////////////////////////////////////////////////////////

// 4. Corner Cases of Coersion

/////////////////////////////////////////////////////////////////////////////

// 5. Truthy and Falsy Value

// Falsy Value

// the following 8 values are considered falsy (they become `false`  when converted to boolean) :

// 1. `false`
// 2. `0`
// 3. `0`
// 4. `0n` (BigInt zero)
// 5. `""` (empty string)
// 6. `null`
// 7. `undefined`
// 8. `NaN`


// 1. false
if(false) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 2. 0
if(0) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 3. -0
if(-0) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 4. 0n(BigInt Zero)
if(0n) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 5. "" (empty string)
if("") {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 6. null
if(null) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 7. undefined
if(undefined) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// 8. NaN
if(NaN) {
  console.log("truthy");
} else {
  console.log("Falsy"); // runs
}

// Truthy Value

// Everything else (not in the falsy list) is truthy value.

// Examples :

// 1. `"hello"` (non-empty string)
// 2. `42` (any non-zero number)
// 3. `[]` (empty array)
// 4. `{}` (empty object)
// 5. `function() {}` (functions)


// 1. "hello"
if ("hello") {
  console.log("This is truthy"); // runs
}

// 2. []
if ([]) {
  console.log("This is truthy"); // runs
}

// 3. {}
if ({}) {
  console.log("This is truthy"); // runs
} 
