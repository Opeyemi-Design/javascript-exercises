const repeatString = function(string, num) {
    let repeatedString = '';
  
    for (let i = 0; i < num; i++) {
      repeatedString += string;
    }
    
    return repeatedString;
};

const repeatedString = repeatString('hey', 3);
console.log(repeatedString)

const repeatStringTen = function(string, num) {
    let repeatedStringTen = '';
  
    for (let i = 0; i < num; i++) {
      repeatedStringTen += string;
    }
    
    return repeatedStringTen;
};

const repeatedStringTen = repeatStringTen('hey', 10);
console.log(repeatedStringTen)

// Do not edit below this line
module.exports = repeatString;
