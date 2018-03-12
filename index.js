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



/*********************************************************************************/
// #5 First Factorial Challenge
/* Using the JavaScript language, have the function FirstFactorial(num) take the num
* parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
* For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
*/

var result = 1;

function FirstFactorial ( num ) { 
	for ( var i = num; i > 1; i--) {
  		result *= i;
 	}  
	return result; 
}
 
FirstFactorial(readline());



/*********************************************************************************/
// #6 Simple Adding Challenge
/* Using the JavaScript language, have the function SimpleAdding(num) add up all the
* numbers from 1 to num. For example: if the input is 4 then your program should return
* 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
*/

function SimpleAdding ( num ) { 
  var result = 0;
  for ( var i = num; i > 0; i-- ) {
    result += i;
  }
  return result;     
}
   
SimpleAdding(readline());



/*********************************************************************************/
// #7 Check Nums Challenge
/*
* Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters
* being passed and return the string true if num2 is greater than num1, otherwise return the
* string false. If the parameter values are equal to each other then return the string -1.
*/

function CheckNums ( num1,num2 ) { 
  if ( num2 > num1 ) {
      return true;
  } else if ( num1 > num2 ) { 
      return false;
  } else {
      return "-1";
  }
}
   
CheckNums(readline());



/*********************************************************************************/
// #8 Time Convert Challenge
/*
* Using the JavaScript language, have the function TimeConvert(num) take the num parameter
* being passed and return the number of hours and minutes the parameter converts to
* (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
*/

function TimeConvert ( num ) { 
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}
   
TimeConvert(readline());



/*********************************************************************************/
// #9 Longest Word Challenge
/*
* Using the JavaScript language, have the function LongestWord(sen) take the sen parameter
* being passed and return the largest word in the string. If there are two or more words
* that are the same length, return the first word from the string with that length. Ignore
* punctuation and assume sen will not be empty.
*/

function LongestWord ( sen ) { 
	
  var arr = sen.split(" "); // splitting a string into an array of words
  var elementLength = [];
  
  for ( var i = 0; i < arr.length; i++ ) { 
    arr[i] = arr[i].replace(/[^a-z0-9]/gi, ""); // ignoring punctuation
    elementLength[i] = arr[i].length; // calculating length of each word
  }
  
  var max = Math.max(...elementLength); // finding the longest word
  var maxValues = [];
  
  for ( i = 0; i < arr.length; i++ ) {
    if ( max === elementLength[i] ) { // checking if there is two or more words that are the same length
      maxValues.push(arr[i]);
    }
  }
    
  var finalMax = maxValues[0]; // finding the first longest word
  return finalMax;
}

LongestWord(readline());



/*********************************************************************************/
// #10 Alphabet Soup Challenge
/*
* Using the JavaScript language, have the function AlphabetSoup(str) take the str string
* parameter being passed and return the string with the letters in alphabetical order
* (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
*/

function AlphabetSoup ( str ) { 

  var arr = str.split("");
  var sort = arr.sort();
  var newStr = sort.join("");
  return newStr;         
}

AlphabetSoup(readline());










