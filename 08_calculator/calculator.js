let array1 = [2,4]
const add = function(a,b) {
	if (Array.isArray(a)) {
    return a.reduce((total, item) => total+=item,0)
  }
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a, ...args) {
  let newArray = a.concat(args)
  console.log(newArray)
	if (Array.isArray(a)) {
    return newArray.reduce((total, item) => total+=item,0)
  };
}

const multiply = function(a) {
  return a.reduce((total, item) => total * item,1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	let sum = a
  let i = a-1
  
  //for (; i<=1; i--) {
  //  console.log(sum,i)
  //  sum = sum + a*i
  //}
  while(i>=1) {
    console.log(sum,a,i)
    sum = sum * i
    i =  i-1
  }
  if (sum === 0) return 1
  return sum
};

//Do not edit below this line

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};