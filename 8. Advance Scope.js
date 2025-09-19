// // 1. Lexical Scope

// var teacher = "Kyle";

// function otherClass(){
//   var teacher = "Suzy";
  
//   function ask(question){
//     console.log(teacher, question);
//   }
  
//   ask("Why?");
// }

// otherClass();

// //Output : "Suzy Why?" Because of Lexical Scope



// 2. Dynamic Scope

var teacher = "Kyle";

function ask(question){
  console.log(teacher, question);
}

function otherClass(){
  var teacher = "Suzy";
  ask("Why?")
}

otherClass(); // If JS Support dynamic scope then will be "Suzy Why?"
// Actual Output is "Kyle Why?" because 
// JS Lexical Scope.









