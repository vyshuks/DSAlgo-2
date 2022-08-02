// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var helper = function (nums, n) {
  let prev2 = 0;
  let prev = nums[0];

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
var rob = function (nums) {
  let n = nums.length;

  if (n == 1) {
    return nums[0];
  }
  let temp1 = nums.slice(0, -1);
  let temp2 = nums.slice(1);

  let ans1 = helper(temp1, n - 1);
  let ans2 = helper(temp2, n - 1);

  return Math.max(ans1, ans2);
};
