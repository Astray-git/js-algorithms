import Node from './LinkedListNode'

export default class LinkedList {
  head: Node | null

  constructor(value: number, next = null) {
    this.head = null
  }

  append(value: number): LinkedList {
    if (this.head === null) {
      this.head = new Node(value)
      return this
    }

    let current: Node = this.head
    while (current.next !== null) {
      current = current.next
    }
    current.next = new Node(value)

    return this
  }

  prepend(value: number): LinkedList {
    const newHead = new Node(value)
    newHead.next = this.head
    this.head = newHead

    return this
  }

  deleteWithValue(value: number): Node | null {
    let deletedNode = null

    if (this.head === null) return deletedNode

    if (this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
      return deletedNode
    }

    let current = this.head
    while (current.next !== null) {
      if (current.next.value === value) {
        deletedNode = current.next
        current.next = current.next.next
        return deletedNode
      }
      current = current.next
    }

    return deletedNode
  }
}
