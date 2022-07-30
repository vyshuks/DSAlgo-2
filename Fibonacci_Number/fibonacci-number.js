// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let prev1 = 0,
    prev2 = 1;
  let cur = 0;

  for (let i = 2; i <= n; i++) {
    cur = prev1 + prev2;
    prev1 = prev2;
    prev2 = cur;
  }

  return cur;
};
