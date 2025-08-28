// 1. Primitive Types

// (Not Objects)
// - `undefined` - A variable declared but not assigned any value.
// - `string` - Represents text data.
// - `number` - Represents numeric values.
// - `boolean` - Represents true or false
// - `symbol` - A uniques and immutable identifier, mostly used as object keys.
// - `bigint`  - Used for large integers beyond the `Number` limit.

// (Objects)
// - `null` - Represents an intentional empty value.
// - `object` - store data in key-value pairs.
// - `function` - In JavaScript, functions are objects that can be called.
// - `array` - An Ordered list of values (a special type of object).

// In JavaScript, variables don’t have types, values do.

//////////////////////////////////////////////////////////////////////////////////////////

// // 2. typeof Operator

// // Primitive Types : typeof

// // (Not Objects)

// var v;
// typeof v; // "undefined"

// v = "1";
// typeof v; // "string"

// v = 2;
// typeof v;  // "number"

// v = true;
// typeof v;  // "boolean"

// v = {};
// typeof v;  // "object"

// v = Symbol();
// typeof v; // "symbol"


// // (Objects)

// typeof doesntExist;  // "undefined"

// var v  = null;
// typeof v; // "object"

// v = function(){};  // "function"
// typeof v;

// v = [1, 2, 3];
// typeof v;  // "object"

// // typeof operator always return a string value.


///////////////////////////////////////////////////////////////////////////////////////////////


// // 3. Undefined , Undeclared and Uninitialized(TDZ issue with let/const)

// // undefined

// let x;

// console.log(x); // undefined

// // Here, x is declared but no value yet.


// // undeclared 

// console.log(y); // RefrenceError: y is not defined.

// // Here, y was never declared, JavaScript throws an error.



// // uninitialized (TDZ = Temporal Dead Zone)
// // When a variable is declared using le/const, but accesed beore initialization.

// console.log(z);
// let z = 5; // ReferenceError: Cannot access 'z' before initialization

// // Here z is declared but still in the Temporal Dead Zone (TDZ) until it’s initialized.


// // Quick Difference :
// // - undefined - Declared, no value assigned.
// // - undeclared - Not Declared yet.
// // - Uninitialized - Declared with let/const but accesed before assigning a value.




/////////////////////////////////////////////////////////////////////////////////////////////



// // 4. NaN & isNaN 

// // 1. NaN (Not a Number)
// // Special value in js that mean - this is not a valid number
// // it usually appears when a math operation fails.

// console.log(0 / 0);        // NaN
// console.log("abc" * 5);    // NaN
// console.log(parseInt("hi"));// NaN


// // 2. isNaN()
// // function that checks whether a value is NaN or not.
// // Returns true if the value is NaN, otherwise false.
// // It converts the value to a number first and then checks if it’s NaN.

// console.log(isNaN("123"));   // false → "123" becomes number 123
// console.log(isNaN("hello")); // true  → "hello" cannot be converted → NaN
// console.log(isNaN(undefined)); // true → converted to NaN


// // 3. Number.isNaN()
// // it does not convert the value - it only returns true if the value exactly NaN.

// console.log(Number.isNaN("123"));   // false (string is not NaN)
// console.log(Number.isNaN("hello")); // false (string is not NaN)
// console.log(Number.isNaN(NaN));     // true (exactly NaN)





// 5. Negative Zero
var trendRate = -0;
trendRate === -0; //true

trendRate.toString(); // "0"
trendRate === 0; // true
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false

