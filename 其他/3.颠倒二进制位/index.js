function padLeft(maxLength, padString) {
  if (padString.length < maxLength) {
    const padLeftString = new Array(maxLength - padString.length + 1).join('0');
    return padLeftString + padString;
  }
  return padString;
}

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  return parseInt(padLeft(32, Number(n).toString(2)).split('').reverse().join(''), 2);
};
