"""
https://leetcode.com/problems/house-robber-ii/
"""


class Solution:
    
    def helper(self, nums: List[int], n: int) -> int:
        
               
        prev2 , prev =  0, nums[0] if nums else 0
        for i in range(1, len(nums)):
            
            rob = nums[i]
            if i > 1:
                rob+= prev2
            not_rob = 0 + prev
            
            cur = max(rob, not_rob)
            prev2 = prev
            prev = cur
            
        return prev
    
    def rob(self, nums: List[int]) -> int:
        n = len(nums)  
        
        if n==1:
            return nums[0]
        first = self.helper(nums[1:], n-1)
        second = self.helper(nums[0:-1], n-1)
        return max(first, second)
        