export default class Node {
  value: number
  next: Node | null

  constructor(value: number, next = null) {
    this.value = value
    this.next = next
  }

  toString(cb?: Function): string {
    return cb ? cb(this.value) : `${this.value}`
  }
}
