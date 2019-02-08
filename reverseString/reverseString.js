const reverseString = function(myString) {
    let str = myString.split("");
    let reversed = str.reverse();
    let join = reversed.join("");
    return join;
    }	
    
    reverseString;

module.exports = reverseString
