

// add whatever parameters you deem necessary
function twoArrayObject(keysArr, valsArr) {
    const keyVal = {};
    let idx = 0;

    // iterate over keysArr
    for(let k of keysArr) {
        // ignore remaining vals if idx exceeds keysArr.length
        if(idx > keysArr.length) return keyVal;
        // set value of k in obj keyVal to value of valsArr[idx] or null if valsArr[idx] === undefined
        keyVal[k] = valsArr[idx] || null;
        // increment index
        idx++
    }

    return keyVal;
}

module.exports = { twoArrayObject };