
const snakeCase = function(string) {
    let snakeString = string.toLowerCase()
            .replace(/-/g, ' ')
            .replace(/\.\./g, ' ')
            .trim()
            .replace(/ /g, '_')
            .replace(/[^_A-Za-z]/g, '');
    return snakeString;
}


// const snakeCase = function(phrase) {
//     if (phrase.indexOf(" ") < 0) {
//         phrase = phrase.replace(/(A-Z)/g, " $1");
//     }
    
//     return phrase
//     .replace(/\.\./g, " ")
//     .trim()
//     .toLowerCase()
//     .replace(/[,\?\.]/g, "")
//     .replace(/\-/g, " ")
//     .split(" ")
//     .join("_")
// }

module.exports = snakeCase
