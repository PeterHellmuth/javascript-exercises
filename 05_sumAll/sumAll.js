const sumAll = function(firstNum, secondNum) {
    if(firstNum < 0 || secondNum < 0){return "ERROR";}
    if(typeof firstNum != "number" || typeof secondNum != "number"){return "ERROR";}
    let smallNum = firstNum;
    let bigNum = secondNum;
    if(firstNum > secondNum){
        smallNum = secondNum;
        bigNum = firstNum;
    }
    if(firstNum === secondNum){
        return firstNum+secondNum;
    }

    let sum=0;
    for(i=0; i<=(bigNum-smallNum); i++){
        sum += smallNum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
