// Middle of the Linked List (#876)

import { ListNode } from './types';

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    const doubleNext = fast?.next?.next;

    fast = doubleNext ?? null;

    slow = slow?.next ?? null;
  }
  return slow;
}

const testMiddleNode = () => {
  const _nodes: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  };

  const middle = middleNode(_nodes);
  // console.log('Middle node:', middle);
};
testMiddleNode();
