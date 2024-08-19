const sumAll = function(max,min) {
    if (!Number.isInteger(max) || 
    !Number.isInteger(min)) return 'ERROR' 
    
    let result = 0,
    maxValue= Math.max(max,min), 
    minValue = Math.min(max,min);

    if (maxValue<0 || minValue<0 ) return 'ERROR'

    while (maxValue>minValue) {
        result += maxValue;
        maxValue-- 
    }
    result+= minValue
    return result
};

// Do not edit below this line
module.exports = sumAll;
