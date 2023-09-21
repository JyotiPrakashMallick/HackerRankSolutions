//Function Description
//Complete the pageCount function in the editor below.
    //int n: the number of pages in the book
    //int p: the page number to turn to
//Returns
    //int: the minimum number of pages to turn



//Complexity Value : 3
function pageCount(n, p) {
    const traverseFromFront = Math.floor(p / 2);
    let traverseFromBack;
    if (n % 2 === 1) {
        traverseFromBack = Math.floor((n - p) / 2);
    } else {
        traverseFromBack = Math.floor((n - p + 1) / 2);
    }
    return Math.min(traverseFromFront, traverseFromBack);
}