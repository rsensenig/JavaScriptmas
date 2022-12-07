/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    // split the string into an array of substrings that are all in lowercase
    let newStr = str.toLowerCase().split("");
    
    // loop through the array with a step of 2
    for(let i=0; i<newStr.length; i+=2) {
        //capitalize the letter
        newStr[i] = newStr[i].toUpperCase();
    }
    
    // join all of the elements of the array into a string
    return newStr.join("");
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));