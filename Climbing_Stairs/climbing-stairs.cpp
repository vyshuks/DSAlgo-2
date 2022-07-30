// https://leetcode.com/problems/climbing-stairs/

class Solution {
public:
    int climbStairs(int n) {
        if(n <= 1) {
            return 1;
        }
        
        int prev_step1=1, prev_step2=1;
        int cur = 0;
        
        for(int i=2; i<=n; i++) {
            cur = prev_step1 + prev_step2;
            prev_step1 = prev_step2;
            prev_step2 = cur;
        }
        
        return cur;
    }
};