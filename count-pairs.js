// Find the number of pairs in an array of integers where their sum is equal to the target value. Assume no duplicate values. Return the number of pairs, not the pairs themselves.


function countPairs(arr, target) {
    let idx = 0;
    let arrMap = new Map();
    let count = 0;


    for(let n of arr) {
        arrMap.set(n, '');
    }

    //
    while(idx < arr.length) {

        let diff1 = target - arr[idx];
        if(diff1 !== 0 && diff1 !== arr[idx]){
            if(diff1 + arr[idx] === target && arrMap.has(diff1)) {
                count++;
                arrMap.delete(arr[idx]);
            }
        }

        idx++;
    }
    
    // exhausted arr, return count
    return count;
}

module.exports = { countPairs };

