function padLeft(maxLength, padString) {
  if (padString.length < maxLength) {
    const padLeftString = new Array(maxLength - padString.length + 1).join('0');
    return padLeftString + padString;
  }
  return padString;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let str1 = Number(x).toString(2);
  let str2 = Number(y).toString(2);
  let maxLength = Math.max(str1.length, str2.length);
  str1 = padLeft(maxLength, str1);
  str2 = padLeft(maxLength, str2);
  let total = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    if (str1[i] !== str2[i]) total++;
  }
  return total;
};
