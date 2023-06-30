const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      result *= numbers[i];
    }
    return result;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

const result1 = console.log(add(0,0))
const result2 = console.log(add(2,2))
const result3 = console.log(add(2,6))

const result4 = console.log(subtract(10,4))

const result5 = console.log(sum([]))
const result6 = console.log(sum([7]))
const result7 = console.log(sum([7,11]))
const result8 = console.log(sum([1,3,5,7,9]))

const result9 = console.log(multiply([2,4]))
const result10 = console.log(multiply([2,4,6,8,10,12,14]))

const result11 = console.log(power(4,3))

const result12 = console.log(factorial(0))
const result13 = console.log(factorial(1))
const result14 = console.log(factorial(2))
const result15 = console.log(factorial(5))
const result16 = console.log(factorial(10))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
