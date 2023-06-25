// Separate the integers in the array with positive integers on the left and negative integers on the right without creating a new array.

// variables ->
// left
// right
// holder

// check for left value to be positive


// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
    let holder = 0;

    while(left < right){
        // are left and right on the wrong sides?
        if(arr[left] < 0 && arr[right] > 0){
            // swap the values
            holder = arr[left];
            arr[left] = arr[right];
            arr[right] = holder;
        }
        
        // left idx val is positive -> increment left
        if(arr[left] > 0) left++;
        // right idx val is negative -> decrement right
        if(arr[right] < 0) right--;
    }

    return arr;
}

module.exports = { separatePositive };
