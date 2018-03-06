/* First Reverse Challenge
 * Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed
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



/*********************************************************************************/
/* Letter Changes Challenge
 * Using the JavaScript language, have the function LetterChanges(str) take
 * the str parameter being passed and modify it using the following algorithm.
 * Replace every letter in the string with the letter following it in the alphabet
 * (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
 * (a, e, i, o, u) and finally return this modified string.
*/

function LetterChanges ( str ) {

    var newString = "";
    var reg = /[a-z]/gi;

    for ( var i = 0; i < str.length; i++ ) {
      if (str.charAt(i) === "z" || str.charAt(i) === "Z") {
        newString += "a";
      } else if ( str.charAt(i).match(reg) ) {
        newString += String.fromCharCode(str.charCodeAt(i) + 1);
      } else {
        newString += str.charAt(i);
      }
    }

    for ( var i = 0; i < newString.length; i++ ) {
        if (newString.charAt(i) === "a" ||
            newString.charAt(i) === "e" ||
            newString.charAt(i) === "i" ||
            newString.charAt(i) === "o" ||
            newString.charAt(i) === "u") {
            newString = newString.replace(newString.charAt(i),newString.charAt(i).toUpperCase());
        }
    }

    return(newString);
 }

LetterChanges(readline());
