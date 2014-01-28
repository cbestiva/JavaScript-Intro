// ############### Values and Expressions ############
// values are expressions
console.log(42);
//=> 42

// addition is an expression
console.log(2 + 2);
//=> 4

// string concatenation is an expression
console.log("hello" + " world");
//=> "hello world"


// ################ Equality #####################
// Always use the "triple equal" operator to test for equality!
console.log("Always use triple equal sign to test equality.")

console.log(42 === 42);
//=> true

console.log(3 === "3");
//=> false

// Double equal operator gives the wrong result!!
console.log(3 == "3");
//=> true

console.log(2 + 2 === 4);
//=> true

console.log("foo" !== "bar");
//=> true

// ############# Reference Type ###################
//Arrays are unique structures.
console.log("Arrays are reference-type data structures.")
console.log([1,2,3] === [ 2-1, 1+1, 2+1]);
//=> false

console.log([1,2,3] === [1,2,3]);
//=> false

// ############# Undefined ######################
// undefinded is a value
console.log("undefined is a value-type.")
console.log(undefined === undefined);
//=> true

var mixed = [1, "two", "three", true];

var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December" ];

console.log("The month array: \n" + months);

// ############# JavaScript Object Literals ################
var micky_mouse = {
                    "first_name": "Micky",
                    "last_name": "Mouse",
                    "address": "Disneyland"
                  }
var micky = {
                    "first_name": "Micky",
                    "last_name": "Mouse",
                    "address": "Disneyland"
                  }

// ##### JS Object Literals are reference types
// Access a literal value with ".key" syntax!
console.log(micky_mouse.first_name);
// This also works
console.log(micky_mouse["first_name"]);

console.log("Are JS Object Literals values? ")
if(micky_mouse === micky ) {
  console.log(true );
} else {
  console.log(false );
}

// ##########  FALSE ###########
console.log("False Tester:");
if(0) { // Try: 0, "", undefined, null, false. Anything else is true!
  console.log(true);
} else {
  console.log(false);
}

// ################  Conditional ##############
// if - else if - else
console.log("if - else if - else:")
// var state = "red";
var state = "green";
// var state = "blue";

// "message" is an example of a JavaScript Object Literal.
var message = {
                "failing": "Tests are failing.",
                "passing": "Tests are passing.",
                "refactor": "Time to refactor."
              }
if (state === "red") {
  console.log(message.failing);
} else if (state === "green") {
  console.log(message.passing);
} else { // Time to refactor.
  console.log(message.refactor);
}

// ##########  While Loop: ########
var a = [1,2,3,4];
var b = [1,2,3,4];
console.log("While Loop:")
var i = 0;
while(i < a.length){
  console.log("The element at index " + i + " is: " + a[i]);
  i++;
}

// ###########  For Loop:  ############
var a = [1,2,3,4];
var b = [1,2,3,4];
console.log("For Loop:")
// Most common mistake is using commas instead of "semicolons" inside the loop declaration.
for(var i = 0; i < mixed.length; i++) {
  console.log("The element at index " + i + " is: " + mixed[i]);
}


// ########### Switch - case #############

var expression = "label2"

switch (expression) {
  case "label1":
    console.log("First case: label1");
    break;
  case "label2":
    console.log("Second case: label2");
    break;
  case "labelN":
    console.log("Nth case: labelN");
    break;
  default:
    console.log("Default case.");
    break;
}



// Since arrays are reference types,
// we cannot use "===" to compare them.
// Write a routine that would compare two arrays.
// Create a variable "result".
// Set result to true if equal, and to false if inequal.



