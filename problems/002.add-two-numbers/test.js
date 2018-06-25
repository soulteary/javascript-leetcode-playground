/* eslint max-len: ["error", { "code": 65535 }] */

const {makeSinglyListNode} = require('../../test/helper');

// 页面单测输入为将数字拆分的倒序数组

module.exports = [
  { // 342 + 564
    input: [makeSinglyListNode([2, 4, 3]), makeSinglyListNode([5, 6, 4])],
    output: [7, 0, 8],
  },
  { // 8 + 0
    input: [makeSinglyListNode([8]), makeSinglyListNode([0])],
    output: [8],
  },
  { // 81 + 0
    input: [makeSinglyListNode([1, 8]), makeSinglyListNode([0])],
    output: [1, 8],
  },
  { // 5 + 5
    input: [makeSinglyListNode([5]), makeSinglyListNode([5])],
    output: [0, 1],
  },
  { // 9 + 81
    input: [makeSinglyListNode([1, 8]), makeSinglyListNode([9])],
    output: [0, 9],
  },
  { // 502 + 805
    input: [makeSinglyListNode([2, 0, 5]), makeSinglyListNode([8, 0, 5])],
    output: [0, 1, 0, 1],
  },

  { // 11 + 89
    input: [makeSinglyListNode([1, 1]), makeSinglyListNode([9, 8])],
    output: [0, 0, 1],
  },
  {
    input: [
      makeSinglyListNode(
          [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9]),
      makeSinglyListNode(
          [5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 9, 9, 9, 9]),
    ],
    output: [7, 0, 8, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 4, 8, 6, 1, 4, 3, 9, 1],
  },
];

