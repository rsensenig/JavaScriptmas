function centuryFromYear(num) {
    //  write code here.
    // make the year a number with two decimal places (e.x. 1905 to 19.05)
    // round that number up to the integer greater than or equal to that number
    return Math.ceil((num/100).toFixed(2));
}

// Testing
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));