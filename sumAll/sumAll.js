const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR";
    };
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR";
    }
    let sum = 0;
	if (a > b) {
		let changed = a;
		a = b;
		b = changed;
	};
    for (i = a; i <= b; i++) {
        sum += Number(i);
    };
    return Number(sum);
};

module.exports = sumAll
