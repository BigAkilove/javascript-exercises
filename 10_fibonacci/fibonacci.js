const fibonacci = function(number) {
    let numberParam = Number(number)
    
    if (numberParam === 0) {
        return 0 
    } else if (numberParam<0) {
        return 'OOPS'
    } else {
        let startingArray = [1,1]
        console.log(startingArray)
        for (let i = 0; i <= numberParam-1; i++) {
            startingArray.push(startingArray[i] + startingArray[i+1])
        }
        return startingArray[numberParam-1]
    }
    
};

console.log(fibonacci(3))
console.log(fibonacci(10))
console.log(fibonacci(-10))
// Do not edit below this line
//npm test fibonacci.spec.js 
//module.exports = fibonacci;
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
