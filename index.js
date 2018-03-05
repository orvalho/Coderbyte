

// First Reverse Challenge

/* Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed
 * and return the string in reversed order. For example: if the input string is "Hello World and Coders"
 * then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse ( str ) {

var arr = str.split(""); // split string into an array for easy access and looping
var newArr = [];

for ( var i = 0; i < arr.length; i++) {
  newArr[i] = arr[arr.length-1-i]; // reverse array (1st char of new array is last char of initial array and so on)
}

str = newArr.join(""); // rejoin array into a string
return str;
}

FirstReverse(readline());

