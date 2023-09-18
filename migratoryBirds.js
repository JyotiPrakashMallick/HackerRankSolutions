//Function Description
//Complete the migratoryBirds function in the editor below.
    //migratoryBirds has the following parameter(s):
    //int arr[n]: the types of birds sighted
//Returns
    //int: the lowest type id of the most frequently sighted birds


//Complexity Value : 7
function findMostFrequentBirdType(arr) {
    const birdCounts = {};
    let maxCount = 0;
    let mostFrequentTypeBird = null;

    for (const birdType of arr) {

        // Update count for the current bird type from the array
        birdCounts[birdType] = (birdCounts[birdType] || 0) + 1;

        // Verify current bird type has a higher count than the previous maximum
        if (birdCounts[birdType] > maxCount) {
            maxCount = birdCounts[birdType];
            mostFrequentTypeBird = birdType;
        } else if (birdCounts[birdType] === maxCount && birdType < mostFrequentTypeBird) {
            mostFrequentTypeBird = birdType;
        }
    }

    return mostFrequentTypeBird;
}
