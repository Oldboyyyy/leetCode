/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const arr = [...this.original];
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = random(i, arr.length - 1);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};

function random(min, max) {
  const pow = String(min).length;
  return (Math.floor(Math.random() * Math.pow(10, pow)) % (max + 1 - min)) + min;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
