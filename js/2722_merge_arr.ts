// 2722. Join Two Arrays by ID

// Given two arrays arr1 and arr2, return a new array joinedArray.
// All the objects in each of the two inputs arrays will contain an id field that has an integer value.
// joinedArray is an array formed by merging arr1 and arr2 based on their id key.
// The length of joinedArray should be the length of unique values of id. The returned
// array should be sorted in ascending order based on the id key.
// If a given id exists in one array but not the other, the single object with that id should be included
// in the result array without modification.
// If two objects share an id, their properties should be merged into a single object:
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// Example 1:
// Input:
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

// Example 2:
// Input:
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction.
// The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

// Example 3:
// Input:
// arr1 = [
//     {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used.
// Since the key "y" only exists in arr1, that value is taken form arr1.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

// shor variant
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const byId: Record<number, ArrayType> = {};

  for (const item of arr1) byId[item.id] = item;
  for (const item of arr2) byId[item.id] = { ...byId[item.id], ...item };

  return Object.values(byId);
}

// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
//   const reduced = reduceArr(arr1, arr2);

//   return Object.keys(reduced).map((key) => reduced[key]);
// }

// const reduceArr = (arr1: ArrayType[], arr2: ArrayType[]) => {
//   return arr1.concat(arr2).reduce(
//     (acc, item) => {
//       if (!acc[item.id]) acc[item.id] = item;
//       else {
//         const piece1 = acc[item.id];
//         const piece2 = item;
//         const merged = reduceValues(piece1, piece2);
//         acc[item.id] = merged;
//       }
//       return acc;
//     },
//     {} as Record<string, ArrayType>,
//   );
// };

// const reduceValues = (val1: ArrayType, val2: ArrayType) => {
//   const res = { ...val2 };
//   const set1 = new Set(Object.keys(val1));
//   const set2 = new Set(Object.keys(val2));
//   const diff = set1.difference(set2);
//   if (diff.size === 0) {
//     return res;
//   }
//   const iterator = diff.values();
//   for (let i = 1; i <= diff.size; i++) {
//     const key = iterator.next().value as string;
//     res[key] = val1[key];
//   }
//   return res;
// };

// console.log(
//   reduceValues(
//     { id: 1, b: { b: 94 }, v: [4, 3], y: 48 },
//     { id: 1, b: { c: 84 }, v: [1, 3] },
//   ),
// );

// console.log(reduceValues({ id: 2, x: 3, y: 6 }, { id: 2, x: 10, y: 20 }));

// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }],
//   ),
// );

// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//   ),
// );

console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }],
  ),
);
