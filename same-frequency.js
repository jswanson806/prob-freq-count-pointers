
// add whatever parameters you deem necessary

function frequency(num){
    const freq = {};
    
    for(let n of num){
        freq[n] = (freq[n] + 1) || 1;
    }

    return freq;
}

function sameFrequency(num1, num2) {
    const num1String = num1.toString().split("");
    const num2String = num2.toString().split("");
    
    const num1StrFreq = frequency(num1String);
    const num2StrFreq = frequency(num2String);
    
    if(num1String.length !== num2String.length) return false;

    for(let freq in num2StrFreq){
        if(num1StrFreq[freq] !== num2StrFreq[freq]) return false;
    }

    return true;
}

module.exports = { 
    frequency,
    sameFrequency
}