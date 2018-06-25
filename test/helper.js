/**
 * Definition for singly-linked list.
 * @param {Number} val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 生成单链
 * @param {Array} source
 * @return {any}
 */
function makeSinglyListNode(source) {
  return source.reverse().reduce((prev, item, idx) => {
    const val = parseInt(item, 10);
    if (idx === 0) {
      prev = new ListNode(val);
    } else {
      let newNode = new ListNode(val);
      newNode.next = prev;
      prev = newNode;
    }
    return prev;
  }, {});
}

module.exports = {
  makeSinglyListNode,
};
