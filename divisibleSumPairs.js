// Function Description
// Complete the divisibleSumPairs function in the editor below.
    // divisibleSumPairs has the following parameter(s):
    // int n: the length of array 
    // int ar[n]: an array of integers
    // int k: the integer divisor
// Returns
    // - int: the number of pairs

//Complexity Value : 6    
function divisibleSumPairs(n, k, ar) {
    let countOfValue = 0;
    for (let i = 0; i < n; i++) {
        for (let j = n; j >= 0; j--) {
            if (i < j && (((ar[i] + ar[j]) % k) === 0)) {
                countOfValue++;
            }
        }
    }
    return countOfValue;
}