const repeatString = function(string,num) {
    if (num <0) return "ERROR"
    
    let i = 0;
    let repeatedString = ''
    while (i < num) {
        repeatedString += string;
        i++;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
