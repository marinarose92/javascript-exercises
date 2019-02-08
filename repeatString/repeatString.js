const repeatString = function(myString, num) {
    if (num < 0) return 'ERROR';
    var a = "";
    for (i = 0; i < num; i++) {
        a = a + myString;
    }
    return a;
}

module.exports = repeatString
