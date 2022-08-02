// https://leetcode.com/problems/house-robber-ii/


class Solution {
    
    public int helper(int[] nums, int n) {
        int prev2 = 0;
        int prev = nums[0];
        
        for(int i=1; i<n; i++) {
            int rob = nums[i];
            if(i > 1) {
                rob+=prev2;
            }
            
            int not_rob = 0 + prev;
            
            int cur = Math.max(rob, not_rob);
            prev2= prev;
            prev= cur;
        }
        
        return prev;
    }
    public int rob(int[] nums) {
        int n = nums.length;
        
        if(n==1) {
            return nums[0];
        }
        
        
        int ans1 = helper(Arrays.copyOfRange(nums, 0, nums.length - 1), n-1);
        int ans2 = helper(Arrays.copyOfRange(nums, 1, nums.length + 1), n-1);
            
        return Math.max(ans1, ans2);
     }
}