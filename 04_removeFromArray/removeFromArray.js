const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
};

const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
