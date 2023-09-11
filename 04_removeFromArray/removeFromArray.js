const removeFromArray = function(inputArray) {
    for(i = 1; i < arguments.length; i++){
        for(j=0; j< inputArray.length; j++){
            if(inputArray[j] === arguments[i]){
                inputArray.splice(j, 1);
            }
        }
    }
    return inputArray;
};



// Do not edit below this line
module.exports = removeFromArray;
