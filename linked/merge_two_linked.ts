//  Merge Two Sorted Lists (#21)

import { ListNode } from './types.ts';

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // "dummy" — фиктивный узел-заглушка перед началом результата.
  // Он нужен только для того, чтобы не думать отдельно про случай
  // "это первый узел результата" (не пришлось бы писать if (!output) ...).
  // В конце просто отбрасываем его и возвращаем dummy.next
  const dummy = new ListNode();

  // "tail" — указатель на последний уже прицепленный узел результата.
  // Сначала он указывает на dummy, потому что результат ещё пуст
  let tail = dummy;
  console.log(`dummy ${JSON.stringify(dummy)}`);
  let currentNode1 = list1;
  let currentNode2 = list2;

  let counter = 0;

  // Пока в обоих списках остаются узлы — выбираем меньший.
  while (currentNode1 && currentNode2) {
    if (currentNode1.val <= currentNode2.val) {
      // Ключевой момент, в котором ты путался: сюда пишем САМ узел,
      // а не currentNode1.next. tail.next должен ссылаться именно
      // на тот узел, который мы прицепляем сейчас
      counter++;
      console.log(
        `Step ${counter}: node1 ${currentNode1.val}, tail ${tail.val}`,
      );
      tail.next = currentNode1;
      currentNode1 = currentNode1.next;
      console.log(`dummy ${JSON.stringify(dummy)}`);
      console.log(
        `tail ${JSON.stringify(tail)}: node1.next ${JSON.stringify(currentNode1)}`,
      );
    } else {
      counter++;
      // console.log(`Step ${counter}: node2 ${currentNode2.val}`);
      tail.next = currentNode2;
      currentNode2 = currentNode2.next;
      // console.log(
      //   `dummy ${JSON.stringify(dummy)}: node2.next ${JSON.stringify(currentNode2)}`,
      // );
    }
    // Двигаем tail на только что прицепленный узел — теперь это
    // новый "последний" узел результата, и следующий next будем
    // проставлять уже у него.
    tail = tail.next;
  }

  // Один из списков закончился раньше. Второй уже отсортирован,
  // поэтому его остаток целиком (со всеми next-связями внутри
  // него) можно прицепить одним присваиванием — по одному узлу
  // руками достраивать не нужно.
  counter++;
  console.log(`Step ${counter}`);
  tail.next = currentNode1 ?? currentNode2;

  return dummy.next;
}

const testMergeTwoLists = () => {
  const _nodes1: ListNode = {
    val: 1,
    next: { val: 2, next: { val: 4, next: null } },
  };
  const _nodes2: ListNode = {
    val: 1,
    next: { val: 3, next: { val: 4, next: null } },
  };

  const result = mergeTwoLists(_nodes1, _nodes2);
  // console.log('Result:', JSON.stringify(result));
};
testMergeTwoLists();
