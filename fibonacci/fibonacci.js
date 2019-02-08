const fibonacci = function (a) {
    let myArray = [1, 1];
    if (a < 0) {
        return "OOPS";
    }
    if (typeof a === 'string') {
        a = Number(a);
    }
      for (i = 1; i <= 25; i++) {
        sum = myArray[myArray.length-1] + myArray[myArray.length-2];
        myArray.push(sum);
      }
      return myArray[a-1];
  }
module.exports = fibonacci
