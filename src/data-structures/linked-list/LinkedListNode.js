export default function LinkedListNode(value, next = null) {
  return {
    value,
    next,
    toString(callback) {
      return callback ? callback(value) : `${value}`;
    },
  };
}

// export default class LinkedListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   toString(callback) {
//     return callback ? callback(this.value) : `${this.value}`;
//   }
// }
