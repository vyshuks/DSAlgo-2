"""
https://leetcode.com/problems/house-robber/
"""

class Solution:
    def rob(self, nums: List[int]) -> int:
        
        n = len(nums)        
        prev2 , prev =  0, nums[0]
        for i in range(1, len(nums)):
            
            rob = nums[i]
            if i > 1:
                rob+= prev2
            not_rob = 0 + prev
            
            cur = max(rob, not_rob)
            prev2 = prev
            prev = cur
            
        return prev