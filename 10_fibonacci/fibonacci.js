const fibonacci = function(num) {
    let fib = [1,1];
    if(num < 1){
        return "OOPS";
    }
    if(num == 1 || num == 2){
        return 1;
    } else{
        for(i = 3; i <= num; i++){
            fib.push(fib[i-3]+fib[i-2]);
        }
    }

    return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
