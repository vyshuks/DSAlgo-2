// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }

  let prev_step1 = 1,
    prev_step2 = 1;
  let cur = 0;

  for (let i = 2; i <= n; i++) {
    cur = prev_step1 + prev_step2;
    prev_step1 = prev_step2;
    prev_step2 = cur;
  }
  return cur;
};
