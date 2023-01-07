/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */

function awardBonuses(){
    // create a variable to store the list of bonuses in an array
    let bonusList = [];
    
    // loop through numbers 1 to 100
    for(let i = 1; i <= 100; i++) {
        // if the number is divisible by 3
        if(i % 3 === 0) {
            // add the number and "Vacation!" to the list
            bonusList.push(`${i} - Vacation!`);
        // else if the number is divisible by 5
        } else if(i % 5 === 0) {
            //add the number and "$100,000 bonus!" to the list
            bonusList.push(`${i} - $100,000 bonus!`);
        // else if the number is divisible by 3 and 5
        } else if(i % 3 === 0 && i % 5 === 0) {
            // add the number and "JACKPOT! 1 Million and a Yacht!" to the list
            bonusList.push(`${i} - JACKPOT! 1 Million and a Yacht!`);
        // else
        } else {
            // add the number and ":(" to the list
            bonusList.push(`${i} - :(`);
        }
    };

    return bonusList;
};

console.log(awardBonuses());