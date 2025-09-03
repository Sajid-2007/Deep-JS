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