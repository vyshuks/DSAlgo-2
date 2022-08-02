// https://leetcode.com/problems/house-robber/



class Solution {
public:
    int rob(vector<int>& nums) {
        
        int n = nums.size();
        int prev2 = 0, prev = nums[0];
        int cur = 0;
        
        for(int i=1; i<n; i++) {
            int rob = nums[i];
            if(i > 1) {
                rob += prev2;
            }
            
            int not_rob = 0 + prev;
            cur = max(rob, not_rob);
            
            prev2 = prev;
            prev=cur;
        }
        
        return prev;
        
    }
};