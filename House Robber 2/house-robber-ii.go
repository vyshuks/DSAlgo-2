// https://leetcode.com/problems/house-robber-ii/

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func helper(nums []int, n int) int {

	prev2 := 0
	prev := nums[0]

	for i := 1; i < n; i++ {
		rob := nums[i]
		if i > 1 {
			rob += prev2
		}

		not_rob := 0 + prev
		cur := max(rob, not_rob)
		prev2 = prev
		prev = cur
	}
	return prev

}

func rob(nums []int) int {
	n := len(nums)

	if n == 1 {
		return nums[0]
	}

	ans1 := helper(nums[0:n-1], n-1)
	ans2 := helper(nums[1:], n-1)

	return max(ans1, ans2)

}