// https://leetcode.com/problems/climbing-stairs/

func climbStairs(n int) int {
	if n <= 1 {
		return 1
	}

	prev_step1 := 1
	prev_step2 := 1
	cur := 0

	for i := 2; i <= n; i++ {
		cur = prev_step1 + prev_step2
		prev_step1 = prev_step2
		prev_step2 = cur
	}

	return cur
}