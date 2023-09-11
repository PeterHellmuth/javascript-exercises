const add = function(firstNum, secondNum) {
  if(typeof firstNum != "number" || typeof secondNum != "number"){return "ERROR";}
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	if(typeof firstNum != "number" || typeof secondNum != "number"){return "ERROR";}
  if(firstNum > secondNum){
    return firstNum - secondNum;
  } else{
    return secondNum - firstNum;
  }
};

const sum = function(numArray) {
  let sum=0;
  for(const num of numArray){
    if(typeof num != "number"){
      return "ERROR"
    } else{
      sum += num;
    };
  }
  return sum;
};

const multiply = function(numArray) {
  let result=1;
  for(const num of numArray){
    if(typeof num != "number"){
      return "ERROR"
    } else{
      result *= num;
    };
  }
  return result;
};

const power = function(firstNum, secondNum) {
  if(typeof firstNum != "number" || typeof secondNum != "number"){return "ERROR";}
  return firstNum**secondNum;
	
};

const factorial = function(firstNum,) {
  if(typeof firstNum != "number"){return "ERROR";}
  let result = 1;
	for(i=1; i <= firstNum; i++){
    result*= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
