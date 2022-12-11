/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(str){
    
    let reversedStr = "";
    
    for(let i=0; i<str.length; i++) {
        reversedStr= str[i] + reversedStr;
    }
    return reversedStr;
}

// function reverseString(str){
    
//     let reversedStr = "";
    
//     for(let i=str.length-1; i>=0; i--) {
//         reversedStr= reversedStr + str[i];
//     }
//     return reversedStr;
// }

console.log(reverseString("!htrae ot emocleW"));

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

// function reverseStringsInArray(arr){
//     return arr;
// }

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));