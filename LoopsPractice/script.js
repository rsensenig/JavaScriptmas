// Solve the following problems, you will need to determine which for loop to use, or if one is needed at all:


// 1. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// create a function that accepts a string as an argument
const countSyllables = (str) => {
    // store the number of syllables in a variable, start with 0
    let num = 0;
    
    // loop through the string for the length of the string
    // have the increment go up by 2
    for(i=0; i<str.length; i+=2) {
        // increase the number by 1
        num += 1;
    }

    // return the number of syllables
    return num;
}

console.log(countSyllables("Lalalalalalala"));


// 2. Loop through the `myFavoriteFoods` array and print each element to the console as a numbered list

// store an array of my favorite foods into a variable
const myFavoriteFoods = ['ramen', 'shishito peppers', 'pesto pasta', 'popcorn', 'edamame', 'dark chocolate'];

// create a function that accepts an array as an argument
const printArray = (array) => {
    // store the number for the numbered list in a variable, starting at 0
    let num = 0;

    // loop through the array for the length of the array and increment by one
    for(i=0; i<array.length; i++) {
        // increase the number by 1
        num += 1;
        
        // print each element to the console with the number before it
        console.log(num, array[i]);
    }
}

printArray(myFavoriteFoods);

// 3. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// create a function that accepts a word as an argument
const checkCase = (word) => {
    // Create a variable for upper case and have it start out as false
    let hasUpper = false;

    //Create a variable for lower case and have it start out as false
    let hasLower = false;

    // loop through each character of a word
    for(const char of word) {
        // if the character is upper case
        if(char === char.toUpperCase()) {
            // then hasUpper is true
            hasUpper = true;
        // else if the character is lower case
        } else if(char === char.toLowerCase()) {
            // then hasLower is true
            hasLower = true;
        } 
    }

    // if hasUpper is true and hasLower is false
    if(hasUpper === true && hasLower === false) {
        // then return "upper"
        return "upper";
    // else if hasUpper is false and hasLower is true
    } else if(hasUpper === false && hasLower === true) {
        // then return "lower"
        return "lower";
    } else {
        // else return "mixed"
        return "mixed";
    }
}

console.log(checkCase("POPCORN"));
console.log(checkCase("popcorn"));
console.log(checkCase("Popcorn"));
console.log(checkCase("PoPcOrN"));

// 4. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

// store a secret number in a variable that is between 1 and 100
let secretNum = (Math.floor(Math.random() * (100 - 1) + 1));

// store the number of tries in a variable, starting with 10
let tries = 10;
// while the tries are greater than 0
while(tries > 0) {
    // prompt the user for a number between 1 and 100 and store in a variable
    let guess = prompt("Let's play a game! Guess a number between 1 and 100");

    // if the number is larger than the secret number
    if(guess > secretNum) {
        // alert that the number is too large
        alert(`That number was too large. Please guess again. You have ${tries} left.`)
    // else if the number is smaller than the secret number
    } else if(guess < secretNum) {
        // alert that the number is too small
        alert(`That number was too small. Please guess again. You have ${tries} left.`)
    } else {
        // alert the user that they won!
        alert("Congratulations! You won!!!");
    }

    // decrease tries by one
    tries--;
}