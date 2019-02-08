function leapYears(year) {
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 == 0)) {
        return true;
		} else {
        return false;
        }
}

    // is divisible by four
    // is not divible by 100 && 400
    // is not a century year divisible by 400

module.exports = leapYears
