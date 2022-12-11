/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

// METHOD 1: reverse the string manually through a for loop, starting at the beginning of the string
// function reverseString(str){
    
//     let reversedStr = "";
    
//     for(let i=0; i<str.length; i++) {
//         reversedStr = str[i] + reversedStr;
//     }
//     return reversedStr;
// }

// METHOD 2: reverse the the string manually through a for loop, starting at the end of the string
// function reverseString(str){
    
//     let reversedStr = "";
    
//     for(let i=str.length-1; i>=0; i--) {
//         reversedStr = reversedStr + str[i];
//     }
//     return reversedStr;
// }

// METHOD 3: use string methods to reverse the string
function reverseString(str){
    // the split method splits the string object into an array of substrings
    // the reverse method reverses the array in place
    // the join method joins all the elements of the array into a string
    return str.split("").reverse().join("");
}

console.log(reverseString("!htrae ot emocleW"));

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

// METHOD 1: reverse the strings in the array manually using a for loop and the reverseString() function
// let newArr = [];

// function reverseStringsInArray(arr){
//     for(let i=0; i<arr.length; i++) {
//         newArr.push(reverseString(arr[i]));
//     }
//     return newArr;
// }

// METHOD 2: reverse the strings in the array using the map function and the reverseString() function
function reverseStringsInArray(arr){
    return arr.map(str => reverseString(str));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));