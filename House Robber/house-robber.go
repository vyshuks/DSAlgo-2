// https://leetcode.com/problems/house-robber/

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func rob(nums []int) int {

	n := len(nums)

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

