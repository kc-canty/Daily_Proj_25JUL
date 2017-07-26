// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    // Your answer here
    if (num1 < num2) {
    	return num2 + ' is the larger number';
    }
    	else {
    	return num1 + ' is the larger number';  
    	}  	
    }
console.log(max(34,18));




// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    // Your answer here
    if (num1 < num2 && num2 < num3) {
    	return 'Largest number is ' + num3;
    }
    else if  (num1 < num3 && num3< num2) 
    	return 'Largest number is ' + num2;
    
    else {
    	return 'Largest number is ' + num1;
    }
    }

    

console.log(maxOfThree(212,22,13));





// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if ( "a" || "e" || "i" || "o" || "u")
    	return ''

}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1, num2) { 
  return num1 + num2;
}

sum(5, 10);



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (num1, num2, num3) { 
  return ((num1 + num2 + num3)/3);
}

sum(3, 6 ,18);



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string) {

	var string = "Whatever you do DON'T GIVE UP!";
	var stringCount = string.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
