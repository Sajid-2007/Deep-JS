// # 3. Philosophy of Coercion

// Coercion means converting a value from one type to another.

// ## Types of Coercion

// ### Implicit Coercion (Automatic)

// JavaScript converts value on its own.


// "5" + 2   // "52"   (number → string)
// "5" - 2   // 3      (string → number)


// ### Explicit Coercion (Manual)

// we convert values yourself.

// Number("123")  // 123  (string → number)
// String(100)    // "100"  (number → string)

// ## Coercion by Operators

// Some operators trigger specific coercion :

// - `+` (addition / string concat) — if one is string, convert others to string.
// - `- * / %` — always convert operands to numbers.
// - == (loose equality) — tries to convert both side to same type.
// - Logical operators (`&&, ||, !` )— use `ToBoolean` conversion.