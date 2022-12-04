/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// write a function whisper that takes a sentence as an argument
const whisper = (sentence) => {
    // make the sentence all lowercase
    // insert "shh..." at the beginning of the sentence
    // store this new sentence in a variable
    let newSentence = ("shh..." + sentence).toLowerCase();

    // if there is an exclamation point at the end of the new sentence
    if (newSentence.endsWith("!")) {
        //remove it
        newSentence = newSentence.slice(0, -1);
    }

    return newSentence;
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));