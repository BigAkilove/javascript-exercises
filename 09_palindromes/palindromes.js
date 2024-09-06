const palindromes = function (string) {
    let noSpace = string.replaceAll(new RegExp(/[\s\.,!]/g),'').toLowerCase();
    let reversedString = ''

    for (let i = noSpace.length -1; i>-1;i--) {
        console.log(i, typeof noSpace[i]);
        reversedString = reversedString.concat(noSpace[i]);
    }
    return reversedString === noSpace
};

// Do not edit below this line
module.exports = palindromes;
