// 1. Double & Triple Equals

// (a) Double Equals (`==`)

// Double Equals (`==`) compares only value and allow coercion.

// It is a loose equality.

// Example :

// ```jsx
// 5 == "5"     // true   (string "5" converted to number 5)
// 0 == false   // true   (false converted to 0)
// null == undefined // true (special rule)
// ```

// Here data types changed using coercion.

// (b) Triple Equals (`===`)

// Triple Equals ( `===` ) compare value and type both and don’t allow coercion

// It is a Strict equality.

// Example :


// 5 === "5"    // false   (number vs string, no conversion)
// 0 === false  // false   (number vs boolean)
// null === undefined // false


// Here this is safer because no hidden conversion.

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Coercive Equality

// Coercive Equality means equality check using `==`  (double equals).

// It’s called coercive because JS performs type coercion (automatic type conversion) before comparing values.

// 5 == "5"        // true   → "5" (string) coerced to 5 (number)
// 0 == false      // true   → false coerced to 0
// null == undefined // true (special rule in JS)

// [] == 0        // true  (empty array → "" → 0)
// "" == false    // true  ("" → 0, false → 0)

// > Coercive equality (==) = compares values after coercion.
// > Strict equality (===) = compares values without coercion (checks type + value).



// 3. Double Eqaual Walkthrough

// var w1c = 42;
// var w2c = [42];

// console.log(w1c == w2c) 


//   // 4.  Double equals corner cases

// var w1s = [];
// var w2s = [];

// console.log(w1s == !w2s);

// // 5. Corner Cases of Boolean. 

// var ws = [];

// if(ws){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(ws == true){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(ws == false){
//     console.log(true)
// }else{
//     console.log(false)
// }


// 6. Corner Cases Summary 

// Avoid :
// 1. == with 0 or "" (or even " ")
// 2. == with non.primitives 
// 3. == true or == false : allow ToBoolean or use ===



// 7. The cases for preferring Double Equals

// Summary : making types known and obvious leads to better code. if types are known, == is best. Otherwise, fall back to ===