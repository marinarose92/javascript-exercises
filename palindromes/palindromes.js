const palindromes = function(word) {
    safeWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    let toArray = safeWord.split('');
    newWord = toArray.reverse();
    if (newWord.join('') == safeWord) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
