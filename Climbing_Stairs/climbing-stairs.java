// https://leetcode.com/problems/climbing-stairs/


class Solution {
    public int climbStairs(int n) {
        if(n<=1) {
            return 1;
        }
        
        int step_prev1 = 1;
        int step_prev2 = 1;
        int cur = 0;
        
        for(int i=2; i<=n; i++) {
            cur = step_prev1 + step_prev2;
            step_prev1 = step_prev2;
            step_prev2 = cur;
        }
        
        return cur;
    }
}