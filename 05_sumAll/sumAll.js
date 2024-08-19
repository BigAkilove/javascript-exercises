const sumAll = function(...args) {
    let result = 0, 
    maxValue= Math.max(...args), 
    minValue = Math.min(...args);

    if (!Number.isInteger(maxValue) || !Number.isInteger(minValue)|| maxValue<0 || minValue<0 || (minValue % 1 != 0) || (maxValue %1 != 0)) {
        return 'ERROR' 
    } else {
        while (maxValue>minValue) {
        result += maxValue;
        maxValue-- 
    }
    result+= minValue
    return result
};
}
// Do not edit below this line
module.exports = sumAll;
