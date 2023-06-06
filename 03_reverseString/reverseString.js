const reverseString = function(input) {
    return input.split('').reverse().join('');
};

const reversed = reverseString('123! abc!');
console.log(reversed);

// Do not edit below this line
module.exports = reverseString;
