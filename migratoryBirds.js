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
