const reverseString = function(string) {
    if(!string) return ''
    
    let reversedString = '';
    let i = string.length;
    
    do {
        i--;
        reversedString += string[i];
    } while (i>0)
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
