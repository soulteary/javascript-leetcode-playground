/**
 * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 *
 * 示例：
 *
 * 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 * 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
 * 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
 */

// 这道题可以使用常规搜索来做，用合并区间的思路去处理，但是在处理部分重复字符串的完全不重复内容会有坑
// 使用HashMap可以解决问题，但是空间复杂度过高
// 另外，过程数值最好不去存储，如果存储也使用HashMap方案处理，避免空间不足
//

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = module.exports = function(s) {

  let len = s.length;
  // case 0,1
  if (len < 2) return len;

  let result = 1;

  // N | abcabcaab
  // -------------------
  // - | a b c a b c a a b
  // 1 | . . . x
  // 2 | x . . . x
  // 3 | x x x . . . x

  // 双循环，外圈动态调整区间

  return result;
};

module.exports = lengthOfLongestSubstring;
