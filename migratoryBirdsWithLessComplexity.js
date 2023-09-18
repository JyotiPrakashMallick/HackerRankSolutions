//Function Description
//Complete the migratoryBirds function in the editor below.
    //migratoryBirds has the following parameter(s):
    //int arr[n]: the types of birds sighted
//Returns
    //int: the lowest type id of the most frequently sighted birds

//Complexity Value : 4
function migratoryBirds(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = new Array(6).fill(0);
        for (let bird of arr) {
            count[bird]++;
        }
        return count.indexOf(Math.max(...count));
    }
}