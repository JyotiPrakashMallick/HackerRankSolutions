//Function Description
//Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
    //dayOfProgrammer has the following parameter(s):
    //year: an integer
//Returns
    //A single integer denoting year Y.


//Complexity Value : 13
function dayOfProgrammer(year) {
    let isLeapYear = false;
    let day = 0;
    let month = 0;

    if (year === 1918) {
        day = 26;
        month = 9;

    } else if (
        (year < 1918 && year % 4 === 0) ||
        (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))
    ) {
        isLeapYear = true;
    }

    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < daysInMonth.length; i++) {
        if (day + daysInMonth[i] > 256) {
            month = i + 1;
            day = 256 - day;
            break;
        }
        day += daysInMonth[i];
    }

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
console.log(dayOfProgrammer(1918));