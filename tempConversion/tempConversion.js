const ftoc = function(farVar) {
toCelsius = (farVar - 32) * 5/9;
return Math.round(toCelsius * 10) / 10;
}

const ctof = function(celVar) {
toFahrenheit = celVar * 9/5 + 32;
return Math.round(toFahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
