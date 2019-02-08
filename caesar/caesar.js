const caesar = function(a, b) {
    return a.split('').map((letter) => {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if (letter === letter.toUpperCase()) alphabet = alphabet.toUpperCase();
        const position = alphabet.indexOf(letter);
        if (position < 0) return letter;
        // the while loop is so it can work with negatives
        while (b < 0) {
        b += 26;
        }
         return alphabet[(position + b) % 26];
        
    }).join('');
    }
    
module.exports = caesar
