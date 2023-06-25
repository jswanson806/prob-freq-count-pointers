
// add whatever parameters you deem necessary

function freqCounter(str){
    const freq = {};
    // iterate over characters in str
    for(let char of str){
        // increment value of freq[char] if key exists in object or set it to 1
        freq[char] = (freq[char] + 1) || 1;
    }
    // return the object with key value pairs of characters and frequency of appearance in str
    return freq;
}

function constructNote(msgString, charString) {
    if(msgString.length === 0 && charString.length !== 0) return true;
    if(msgString.length > charString.length) return false;

    const msgStringFreq = freqCounter(msgString);
    const charStringFreq = freqCounter(charString);

    for(let char in msgStringFreq){
        if(charStringFreq[char] < msgStringFreq[char]) return false;
    }

    return true;
}

module.exports = {
    freqCounter,
    constructNote
}