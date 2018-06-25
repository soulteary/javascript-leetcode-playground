/**
 * @link https://leetcode-cn.com/problems/two-sum/description/
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 *
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 *
 * 所以返回 [0, 1]
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 创建一个缓存避免输入过长的时候，重复遍历数据造成O(n)消耗
  let cache = {};
  // 遍历输入数据
  for (let i = 0; i < nums.length; i++) {
    // 获取当前数值和目标数值之间的差值
    let delta = target - nums[i];
    // 如果缓存中存在差值，则直接返回结果（判断差值是否为数字即可，可以支持接收负数）
    if (!isNaN(cache[delta])) return [cache[delta], i];
    // 如果没有命中缓存, 将当前数据存入缓存
    cache[nums[i]] = i;
  }
  // 给定一个默认返回，避免程序异常
  return [];
};

module.exports = twoSum;
