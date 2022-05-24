/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const revL1 = l1; 
  const revL2 = l2;
  // console.log(revL1, revL2);

  const res = []
  const n = revL1.length > revL2.length ? revL1.length : revL2.length;
  var remaining = 0;
  for (let i = (n - 1); i >= 0; i--) {
    let output = ((revL1[i] || 0) + (revL2[i] || 0)) + Number(remaining);
    output = output.toString();

    if (output > 9) {
      remaining = output[0];
      output = output[1];
    } else {
      remaining = 0;
    }
    res.push(Number(output));
  }

  return res;
};

const l1 = [2, 4, 3], l2 = [5, 6, 4];

console.log(
  addTwoNumbers(l1, l2)
);
