//Function Description
//Complete the migratoryBirds function in the editor below.
    //migratoryBirds has the following parameter(s):
    //int arr[n]: the types of birds sighted
//Returns
    //int: the lowest type id of the most frequently sighted birds


//Complexity Value : 5
function sockMerchant(n, ar) {
    var count = {};
    var pairNumbers = 0;
    for (var i = 0; i < ar.length; i++) {
        var sock = ar[i];
        if (count.hasOwnProperty(sock)) {
            count[sock] += 1;
        } else {
            count[sock] = 1;
        }
    }
    for (var sock_count in count) {
        pairNumbers += Math.floor(count[sock_count] / 2);
    }
    return pairNumbers;

}