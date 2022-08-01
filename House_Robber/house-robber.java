// https://leetcode.com/problems/house-robber/ 


class Solution {
    public int rob(int[] nums) {
        
        int n = nums.length;
        
        int prev2 = 0;
        int prev = nums[0];
        int cur = 0;
        
        for(int i=1; i<n; i++) {
            int rob = nums[i];
            if(i > 1) {
                rob+=prev2;
            }
            
            int not_rob = 0 + prev;
            cur = Math.max(rob, not_rob);
            prev2 = prev;
            prev=cur;
        }
        
        return prev;
        
    }
}