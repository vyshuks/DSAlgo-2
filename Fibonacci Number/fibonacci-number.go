// https://leetcode.com/problems/fibonacci-number/

func fib(n int) int {
	if n <= 1 {
		return n
	}

	prev1 := 0
	prev2 := 1

	cur := 0

	for i := 2; i <= n; i++ {
		cur = prev1 + prev2
		prev1 = prev2
		prev2 = cur
	}

	return cur
}