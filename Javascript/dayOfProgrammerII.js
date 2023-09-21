//Function Description
//Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
    //dayOfProgrammer has the following parameter(s):
    //year: an integer
//Returns
    //A single integer denoting year Y.

//Complexity Value : 4, 7
function isLeapJulian(year) {
    return year % 4 === 0;
}

function isLeapGregorian(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function dayOfProgrammer(year) {
    let isJulian = year < 1918;
    let isLeapYear = isJulian ? isLeapJulian(year) : isLeapGregorian(year);
    
    if (year === 1918) {
        // Special case for transition year
        return "26.09.1918";
    } else if (isLeapYear) {
        // In a leap year, February has 29 days
        return `12.09.${year}`;
    } else {
        // In a non-leap year, February has 28 days
        return `13.09.${year}`;
    }
}

console.log(dayOfProgrammer(1918))
