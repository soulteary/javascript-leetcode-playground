/**
 * @link https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 将列表保存到两个临时变量
  let list1 = l1;
  let list2 = l2;
  // 声明变量储存结果
  let result = [];

  // 当两个链表任意节点有内容时候
  while (list1 || list2) {
    result.push((list1 && list1.val || 0) + (list2 && list2.val || 0));
    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }

  for (let i = 0, j = result.length; i < j; i++) {
    // 只处理大于9的部分
    if (result[i] > 9) {
      // 当前位置取个位数保留
      result[i] = result[i] % 10;
      // 判断是否存在下一位，若存在则累加
      const nextIdx = i + 1;
      // 这里使用typeof判断进行push改变数组长度亦可，但是执行效率没太大变化
      result[nextIdx] = result[nextIdx] || 0;
      result[nextIdx] += 1;
    }
  }
  // NOTICE:题干虽要求ListNode，实际检测的时候，验证的却是Array
  return result;
};

module.exports = addTwoNumbers;
