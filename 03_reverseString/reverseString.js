const reverseString = function(inputString) {
    let stringArray = inputString.split('');
    let outputString = '';
    for(i=inputString.length -1; i>= 0; i--){
        outputString += stringArray[i];
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
