// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  n = nums.length;

  let prev2 = 0,
    prev = nums[0];

  for (let i = 1; i < n; i++) {
    let rob = nums[i];
    if (i > 1) {
      rob += prev2;
    }

    let not_rob = 0 + prev;
    let cur = Math.max(rob, not_rob);
    prev2 = prev;
    prev = cur;
  }

  return prev;
};
