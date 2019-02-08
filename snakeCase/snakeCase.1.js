const snakeCase = function (phrase) {
    if (phrase.indexOf(" ") < 0) {
        phrase = phrase.replace(/(A-Z)/g, " $1");
    }
    return phrase
        .replace(/\.\./g, " ")
        .trim()
        .toLowerCase()
        .replace(/[,\?\.]/g, "")
        .replace(/\-/g, " ")
        .split(" ")
        .join("_");
};
exports.snakeCase = snakeCase;
