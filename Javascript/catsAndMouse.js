//Function Description
//catAndMouse has the following parameter(s):
        //int x: Cat 's position
        //int y: Cat 's position
        //int z: Mouse 's position

//Returns
    //string: Either 'Cat A', 'Cat B', or 'Mouse C'

//Complexity Value : 6
function catAndMouse(x, y, z) {
if (Math.abs(z-x) === Math.abs(z-y)){
        return "Mouse C";
    }
    else if (Math.abs(z-x) > Math.abs(z-y)) {
        return "Cat B";
    }
    else {
        return "Cat A";
    }
}