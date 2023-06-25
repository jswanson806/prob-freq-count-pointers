// Take in two strings and check if the first string can form a sub-sequence in the correct order of the second string. The sub-sequence characters simply have to be present in the same order but do not have to be consecutive in the second string. Output true or false

// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;

    while(str1Idx < str1.length){ // we have exausted str1
        if(str1[str1Idx] === str2[str2Idx]) { // found matching value
            str1Idx++; // increment pointer on str1
        } else {
            str2Idx++; // did not find a match, increment pointer on str2
        }
        // str2 has been exhausted before str1 (loop condition), sub-sequence is not present
        if(str2Idx === str2.length) return false;
    }
    // loop condition was met, which means we found all of the values from str1 in str2
    return true;
}

module.exports = { isSubsequence };

// take in two strings -> str1, str2
// iterate over the characters in str1 with a pointer -> str1Idx
// iterate over the characters in str2 with a pointer -> str2Idx
// move the str2 pointer until it finds a match for the value at the str1Idx pointer
// if str2Idx finds a matching value, increment str1Idx + 1
// continue moving str2Idx until it finds another match
// if no match is found before str2Idx === str2.length - 1, return false

// if str1Idx > str1Idx.length - 1, return true