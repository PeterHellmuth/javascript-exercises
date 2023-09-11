const repeatString = function(inputText, inputIterations) {
    if(inputIterations < 0){return "ERROR";}
    let outputText  = '';
    for(i=0; i< inputIterations; i++){
        outputText += inputText;
    }
    return outputText;
};

// Do not edit below this line
module.exports = repeatString;
