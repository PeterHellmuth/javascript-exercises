const palindromes = function (inputText) {
    inputText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedText = reverseString(inputText);
    return reversedText == inputText;
};

function reverseString(inputText){
    let stringArray = inputText.split('');
    let reversedText = '';
    for(i= inputText.length-1; i>= 0; i--){
        reversedText += stringArray[i];
    }
    return reversedText;
}


// Do not edit below this line
module.exports = palindromes;
