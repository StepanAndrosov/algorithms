// Reverse Linked List (#206)

import { ListNode } from './types';

export const nodes: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

function reverseList(head: ListNode | null) {
  let prev: ListNode | null = null;
  // null
  // { val: 1, next: null }
  // { val: 2, next: { val: 1, next: null } }
  // { val: 3, next: { val: 2, next: { val: 1, next: null } } }
  let current = head;
  // { val: 1, next: { val: 2, next: { val: 3, next: null } } }
  // { val: 2, next: { val: 3, next: null } }
  // { val: 3, next: null }
  // null

  while (current) {
    const next = current.next; // сохраняем следующую ноду
    // { val: 2, next: { val: 3, next: null } }
    // { val: 3, next: null }
    // null
    current.next = prev; // разворачиваем ссылку
    // null
    // { val: 1, next: null }
    // { val: 2, next: { val: 1, next: null } }
    prev = current; // двигаем prev
    // { val: 1, next: null }
    // { val: 2, next: { val: 1, next: null } }
    // { val: 3, next: { val: 2, next: { val: 1, next: null } } }
    current = next; // двигаем current
    // { val: 2, next: { val: 3, next: null } }
    // { val: 3, next: null }
    // null
    // console.log('Prev node:', prev);
    // console.log('Current node after moving:', current);
  }

  return prev;
}

const testReverseNodes = () => {
  const _nodes = nodes;
  const reversedNodes = reverseList(_nodes);
  // console.log(reversedNodes);
};

testReverseNodes();
