"""
https://leetcode.com/problems/climbing-stairs/
"""


class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 1:
            return 1
        
        prev_step1 = prev_step2 = 1
        cur = 0
        
        for i in range(2, n+1):
            cur = prev_step1 + prev_step2
            prev_step1 = prev_step2
            prev_step2 = cur
            
        return cur