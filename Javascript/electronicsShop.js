//Function Description
//Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
    //getMoneySpent has the following parameter(s):
        //int keyboards[n]: the keyboard prices
        //int drives[m]: the drive prices
        //int b: the budget

//Returns
    //int: the maximum that can be spent, or  -1 if it is not possible to buy both items.


//Complexity Value : 6
function getMoneySpent(keyboards, drives, b) {
    let maxBudget = -1;

    for (let i = 0 ; i < keyboards.length; i ++){
        for (let j = 0 ; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxBudget){
                maxBudget = keyboards[i] + drives[j];
            }
        }
    }
    return maxBudget;

}