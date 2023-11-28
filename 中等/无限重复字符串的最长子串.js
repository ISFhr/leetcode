/** 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 滚动窗口
 * 输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
 */
const lengthOfLongestSubstring = (str) => {
    if(str.length <= 1) return str.length

    let left = 0
    let right = 1
    let temp = ''
    let max = 0

    while(right < str.length) {
        temp = str.slice(left, right)
        if (temp.indexOf(str.charAt(right)) > -1) {
            left ++
            continue
        } else {
            right ++
        }
        if (max < right-left)max = right - left
    }

    return max
}