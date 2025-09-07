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

