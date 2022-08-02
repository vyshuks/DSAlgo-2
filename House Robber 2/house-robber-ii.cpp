// https://leetcode.com/problems/house-robber-ii/


class Solution {

private:
    int helper(vector<int>& nums, int n) {
        int prev2 =0;
        int prev = nums[0];
        
        for(int i=1; i<n;i++) {
            int rob = nums[i];
            if(i>1) {
                rob+=prev2;
            }
            
            int not_rob = 0 + prev;
            
            int cur = max(rob, not_rob);
            
            prev2 = prev;
            prev = cur;
        }
        
        return prev;
    }
    
   
public:    
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(n==1) {
            return nums[0];
        }
        vector<int> temp1, temp2;
        
        for(int i=0; i< n; i++) {
            if(i!=0) {
                temp1.push_back(nums[i]);
            }
            
            if(i!=n-1) {
                temp2.push_back(nums[i]);
            }
        }
        
        int ans1 = helper(temp1, n-1);
        int ans2 = helper(temp2, n-1);
        
        return max(ans1, ans2);
    }
};