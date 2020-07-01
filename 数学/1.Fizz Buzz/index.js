/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let res = String(i);
    if (i % 3 === 0) res = 'Fizz';
    if (i % 5 === 0) res = res === 'Fizz' ? 'FizzBuzz' : 'Buzz';
    result.push(res);
  }
  return result;
};
