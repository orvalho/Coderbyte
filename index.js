/* #1 First Reverse Challenge
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
/* #2 Letter Changes Challenge
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



/*********************************************************************************/
/* #3 Letter Capitalize Challenge
 * Using the JavaScript language, have the function LetterCapitalize(str) take
 * the str parameter being passed and capitalize the first letter of each word.
 * Words will be separated by only one space.
*/

function LetterCapitalize ( str ) {

    var arr = str.split(" ");
    var newArr = [];

    for ( var i = 0; i < arr.length; i++ ) {
        newArr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
    }

    str = newArr.join(" ");
    return str;
}

LetterCapitalize(readline());



/*********************************************************************************/
/* #4 Challenge Simple Symbols
 * Using the JavaScript language, have the function SimpleSymbols(str) take the str
 * parameter being passed and determine if it is an acceptable sequence by either
 * returning the string true or false. The str parameter will be composed of + and
 * = symbols with several letters between them (ie. ++d+===+c++==a) and for the string
 * to be true each letter must be surrounded by a + symbol. So the string to the left
 * would be false. The string will not be empty and will have at least one letter. 
*/

function SimpleSymbols ( str ) { 
  
  // checking if first character in string is a letter
  var pattFirstCharIsLetter = /^[a-z]/i;
  var resultFirstCharIsLetter = pattFirstCharIsLetter.test(str);
  
 // checking if last character in string is a letter
  var pattLastCharIsLetter = /[a-z]$/i;
  var resultLastCharIsLetter = pattLastCharIsLetter.test(str);

  // if first or last character in string is a letter, then sequence is unacceptable.
  // It means that not each letter in string is surrounded by a + symbol.
  if ( resultFirstCharIsLetter || resultLastCharIsLetter ) {
    return false;
  }

  var pattCharIsLetter = /[a-z]/i;
  var pattCharIsPlus = /\+/;
  
  // looping through string and checking if there is a letter not surrounded by a + symbol
  for ( var i = 1; i <= str.length-2; i++ ) {
    if ( pattCharIsLetter.test(str.charAt(i)) === true &&
        ( pattCharIsPlus.test(str.charAt(i-1)) !== true ||
         pattCharIsPlus.test(str.charAt(i+1)) !== true )) {
        return false;
    }
  }
  return true;
}

SimpleSymbols(readline());
