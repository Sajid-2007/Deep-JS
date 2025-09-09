// 1. Function Expressions

function teacher(){
    console.log("Teacher Fn")
};

var myTeacher = function anotherTeacher() {  // this is function expression
    console.log(anotherTeacher);
};

console.log(teacher); // returns teacher function
console.log(myTeacher); // returns anotherTeacher function
console.log(anotherTeacher); //  RefrenceError : anotherTeacher is not defind.


// explanation :

// Scope Difference -
    // teacher - declared globally.
    // myTeacher - variable holding the function. 
    // anotherTeacher - visible only inside that function body. 

// Why RefrenceError -
    //     RefrenceError because there's no variable named "anotherTeacher" in global scope

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Naming Function Expressions

// Named Function Expression : Benefits

// - Reliable function self-reference ( recursion, etc). -

// When you give the function a name inside the expression, that name is always available inside its own body.

// - More debuggable stack traces -

// DevTools and console errors show the function name in stack traces.

// Easier to see which function failed instead of just “anonymous”.

// - More self-documenting code

// A clear name directly describes what the function is supposed to do, even befroe reading the body.

// Improves readability and maintenance.


// 3. Arrow Function
