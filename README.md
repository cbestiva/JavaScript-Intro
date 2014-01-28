# JavaScript Introduction

## Learning Objectives
* <h3>Overview - why JavaScript</h3>
* <h3>Use Developer Console</h3>
* <h3>Understand Comments</h3>
* <h3>Understand Numbers</h3>
* <h3>Understand Values & Expressions</h3>
* <h3>Understand Conditionals</h3>
* <h3>Understand Reference Types</h3>
* <h3>Understand Undefined</h3>
* <h3>Understand False</h3>
* <h3>Understand if else</h3>
* <h3>Understand while loop</h3>
* <h3>Understand for loop</h3>
* <h3>Understand switch case</h3>

## Why Javascript? We want high performance web sites!

* <h3> Client side programming:</h3>
	* <h3> Interaction with the DOM.</h3>
	* <h3> Respond to DOM events: click, submit...</h3>
	* <h3> Send requests to the server.</h3>
	* <h3> Act on response from the server.</h3>
* <h3> Server side programming with Node.js.</h3>
* <h3></h3>

## Resources:
* <h3> Code School free course on the Developer Tools.</h3>
		https://www.codeschool.com/courses/discover-devtools
* <h3>JavaScript Alonge:</h3>
		https://leanpub.com/javascript-allonge/read#leanpub-auto-a-pull-of-the-lever-prefaces
* <h3>MDN JavaScript Reference</h3>
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
* <h3>W3Schools JavaScript Reference</h3>
		http://www.w3schools.com/jsref/default.asp

## Comments:
* <h3> Ruby uses '#' to indicate a comment line.
* <h3> JavaScript uses '//' for line comment.

## Numbers:
* <h3> Ruby has Integers and Floats.
* <h3> JavaScript we have just Numbers.

## Values & Expressions
* <h3> Computers return values when you give them expressions. 
* <h3> Give the computer a value and it returns a value, thus values are expressions as well. 
	
		// values are expressions
		42
		//=> 42
	
		// addition is an expression
		2 + 2
		//=> 4
	
		// string concatenation is an expression
		"hello" + " world"
		=> "hello world" 


## Conditionals: always use Triple Equal "===" or "!=="
* <h3> Check to see if two values are identical with the "===" comparitor.

		42 === 42
		=> true
		
		3 === "3"
		=> false
		
		// however the double equal sign gives the wrong result
		3 == "3"
		=> true
		
		2 + 2 === 4
		=> true
		
		"foo" !== "bar"
		=> true
		
## Reference Types: non-identical values that the same contents and are the same type. 
* <h3> Arrays are unique structures.

		[1,2,3] === [ 2-1, 1+1, 2+1]
		=> false
		
		[1,2,3] === [1,2,3]
		=> false


## Undefined
* <h3> When something is "undefined" it has no value.
* <h3> Oddly enough "undefined" is a value.

		undefined === undefined
		=> true

## False
* <h3>0, false, null, undefined, Empty String: ""</h3>
		console.log("False Tester:");
		if(0) { // Try: 0, "", undefined, null, false. Anything else is true!
		  console.log(true);
		} else {
		  console.log(false);
		}


## If Else
	console.log("If - else if - else:")
	// var state = "red";
	var state = "green";
	// var state = "blue";

	// "message" is an example of a JavaScript object written in json.
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

## While loop
	var a = [1,2,3,4];
	var b = [1,2,3,4];

	console.log("While Loop:")
	var i = 0;
	while(i < a.length){
		console.log("The element at index " + i + " is: " + a[i]);
	  i++;
	}

## For loop
	console.log("For Loop:")
	
	// Most common mistake is using commas instead of "semicolons" inside the loop 		declaration.
	
	for(var i = 0; i < a.length; i++) {
	  console.log("The element at index " + i + " is: " + a[i]);
	}

## Switch Case

## Exercise: Implement a routine that checks to see if two arrays are identical.

