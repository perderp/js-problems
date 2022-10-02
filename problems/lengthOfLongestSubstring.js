/*
Given a string s, find the length of the longest substring without repeating characters.
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let left = 0;
    let map = {};
    
    for(let right = 0 ; right < s.length; right++){
        if(map[s[right]] !== undefined && map[s[right]] >= left){
            left = map[s[right]] + 1;
        }
        map[s[right]] = right;
        max = Math.max(max, right - left + 1)
    }
    
    return max

};