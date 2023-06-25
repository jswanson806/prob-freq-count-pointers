
// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let leftIdx = arr[0];
    let rightIdx = arr[arr.length - 1];

    // is target > than largest value in array?
    if(target > arr[arr.length - 1]) return false;

    while(leftIdx < rightIdx){
        let avg = (leftIdx + rightIdx) / 2;
        // check avg of left and right index values
        if(avg === target){ 
            return true;
        } else if(avg < target) {
            leftIdx++;
        } else {
            rightIdx--;
        }
    }
    return false;
}

module.exports = { averagePair };
