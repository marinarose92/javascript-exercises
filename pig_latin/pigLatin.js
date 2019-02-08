let vowels = ["a", "e", "i", "o", "u"];

function isVowel(input) {
	if (vowels.includes(input[0])) {
		return true;
	}
}
function isConsonant(input) {
	if (!vowels.includes(input[0])) {
		return true;
	}
}
function twoConsonants(input) {
	if (!vowels.includes(input[0]) && (!vowels.includes(input[1])) || 
  (input[0] === "q" && input[1] === "u")) {
		return true;
	}
}
function threeConsonants(input) {
	if (!vowels.includes(input[0]) && (!vowels.includes(input[1]) 
  && (!vowels.includes(input[2]))) ||
  (input[0] === "s" && input[1] === "c" && input[2] === "h") ||
  (input[0] !== "q") && (input.includes("qu"))) {
		return true;
	}
}

function translate(words) {
	const piggedArray = [];
	
	const wordArray = words.split(' ');
	wordArray.forEach(function(word) {
    // piggedArray.push(translateWord(word));
		// is the same as
		const piggedWord = translateWord(word);
		piggedArray.push(piggedWord);
	});

	return piggedArray.join(' ');
}

function translateWord(word) {
	if (isVowel(word)) { 
		return word + 'ay';
  } else if (threeConsonants(word)) {
    const firstLetters = word.slice(0, 3);
    const restofWord = word.slice(3);
    const piggedWord = restofWord + firstLetters + 'ay';
    return piggedWord;
	} else if (twoConsonants(word)) {
		const firstLetters = word.slice(0, 2);
		const restOfWord = word.slice(2);
		const piggedWord = restOfWord + firstLetters + 'ay';
		return piggedWord;
	} else if (isConsonant(word)) {
		const piggedWord = word.slice(1) + word[0] + 'ay';
		return piggedWord;
	}
}



module.exports = {
	translate
}

