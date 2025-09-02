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




// // (b) ToString()

// // It is abstract operation that convert values to string.
// // this is work differently depending on the value type
// // This is internal : we dont call ToString() directly, but the engine uses it when it needs a string.
// // Here's how ToString() behaves for different types:


// console.log(String(undefined)); // "undefined"
// console.log(String(null)); // "null"
// console.log(String(true)); // "true"
// console.log(String(123)); // "123"
// console.log(String(10n)); // "10"

// // Symbol trows error
// // console.log(String(Symbol("x"))); // TypeError

// // Objects

// console.log(String([1, 2, 3])); // "1,2,3"
// console.log(String({})); // [object Object] 

// // (c) ToNumber()
// // It is abstract operation that convert values into numeric value.
// // It is not a function you call directly, but JS uses it internally whenever type conversion to number is needed.

// // if value is string 
// console.log(Number("")) // 0
// console.log(Number("0")) // 0
// console.log(Number("-0")) // -0
// console.log(Number("009")) // 9
// console.log(Number("3.14159")) // 3.14159
// console.log(Number("0.")) // 0
// console.log(Number(".0")) // 0
// console.log(Number(".")) // NaN


// console.log(Number(false)) // 0
// console.log(Number(true)) // 1
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN

// // in case of objects (First JS converted to Primitive (via ToPrimitive with hint "number"), then toNumber applied)

// console.log(Number([""])) // 0
// console.log(Number(["0"])) // 0
// console.log(Number(["-0"])) // -0
// console.log(Number([null])) // 0
// console.log(Number([undefined])) // 0
// console.log(Number([1,2,3])) // NaN
// console.log(Number([[[[]]]])) // 0

// console.log(Number({})) // NaN
// console.log(Number({valueOf(){ return 3;}})) // 3

// (d) ToBoolean()
// It is abstract operation that convert values to boolean.

// // Truthy and Falsy Value

// // (a) Falsy Value = false values

// // the following 8 values are considered falsy (they become `false`  when converted to boolean) :

// // 1. `false`
// // 2. `0`
// // 3. `0`
// // 4. `0n` (BigInt zero)
// // 5. `""` (empty string)
// // 6. `null`
// // 7. `undefined`
// // 8. `NaN`


// // 1. false
// if(false) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 2. 0
// if(0) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 3. -0
// if(-0) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 4. 0n(BigInt Zero)
// if(0n) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 5. "" (empty string)
// if("") {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 6. null
// if(null) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 7. undefined
// if(undefined) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // 8. NaN
// if(NaN) {
//   console.log("truthy");
// } else {
//   console.log("Falsy"); // runs
// }

// // (b) Truthy Value = true values

// // Everything else (not in the falsy list) is truthy value.

// // Examples :

// // 1. `"hello"` (non-empty string)
// // 2. `42` (any non-zero number)
// // 3. `[]` (empty array)
// // 4. `{}` (empty object)
// // 5. `function() {}` (functions)


// // 1. "hello"
// if ("hello") {
//   console.log("This is truthy"); // runs
// }

// // 2. []
// if ([]) {
//   console.log("This is truthy"); // runs
// }

// // 3. {}
// if ({}) {
//   console.log("This is truthy"); // runs
// } 




















/////////////////////////////////////////////////////////////////////////////

// 2. Cases of Coersion

// (a) Number to string

// var numStudents = 16;

// console.log(
//   `There are ${numStudent} students.`
// );
// // "There are 16 students."

// var msg1 = "There are ";
// var numStudents = 16;
// var msg2 = " students.";
// console.log(msg1 + numStudents + msg2);


// var numStudents = "16";

// console.log(
//   `There are ${String(numStudents)} students.`
// );
// "There are 16 students."


// (b) string to number

// function addStudent(numStudents){
//   return numStudents + 1;
// }

// console.log(addStudent(numStudents));
// console.log(addStudent(+numStudents));
// console.log(addStudent(Number(numStudents)));

// function addStudent(numStudents){
//   return numStudents - 1;
// }

// console.log(addStudent(numStudents));
// console.log(addStudent(numStudents));
// console.log(addStudent(Number(numStudents)));

/////////////////////////////////////////////////////////////////////////////











// 3. Boxing in Coercion

// When we use a primitive calue like (string, number, boolean) and call
// a method or property on it, JS automatically wraps it inside an object
// (String(), Number(), Boolean()) for short time, then remove the object
// and gives back the primitiv value.

// let str = "hello";

// // primitive string, but we call a method
// console.log(str.toUpperCase())

// // Here `"hello"` is just a primitive string, not an object.

// // But JavaScript does this internally:
// // 1. "hello" → becomes new String("hello") temporarily.
// // 2. Runs `.toUpperCase()` on it.
// // 3. Removes the object, gives back the primitive result "HELLO".


// let n = 42;
// console.log(n.toFixed(2)); // "42.00"  (Number gets boxed)

// let b = true;
// console.log(b.toString()); // "true"   (Boolean gets boxed)












/////////////////////////////////////////////////////////////////////////////

// // 4. Corner Cases of Coercion

// // (a) Number 
// console.log(Number(""));         // 0
// console.log(Number("  \t\n"));   // 0
// console.log(Number(null));       // 0
// console.log(Number(undefined));  // NaN
// console.log(Number([]));         // 0
// console.log(Number([1,2,3]));    // NaN
// console.log(Number([null]));     // 0
// console.log(Number([undefined]));// 0
// console.log(Number({}));         // NaN

// // (b) String 

// console.log(String(-0));   // "0"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// console.log(String([null])); // ""
// console.log(String([undefined])); // ""


// // (c) Boolean 

// console.log(Boolean(new Boolean(false))); // true 

// // (d) other

// console.log(Number(true)); // 1
// console.log(Number(false));// 0

// console.log(1 < 2);     // true
// console.log(2 < 3);     // true
// console.log(1 < 2 < 3); // true

// console.log((1 < 2) < 3);  // true
// console.log((true) < 3);  // true 
// console.log(1 < 3);  // true 


// console.log(3 > 2);  // true 
// console.log(2 > 1);  // true
// console.log(3 > 2 > 1);  // false 

// console.log((3 > 2) > 1);  // false 
// console.log((true) > 1);  // false
// console.log(1 > 1);  // false