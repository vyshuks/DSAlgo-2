"""
https://leetcode.com/problems/fibonacci-number/
"""

class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        
        prev1 , prev2 = 0, 1
        
        for i in range(2,n+1):
            cur = prev1+prev2
            prev1 , prev2 = prev2, cur
            
        return cur