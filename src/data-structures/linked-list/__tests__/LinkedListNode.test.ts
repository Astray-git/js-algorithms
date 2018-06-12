import LinkedListNode from '../LinkedListNode'

describe('LinkedListNode', () => {
  test('should create a node with value but no next', () => {
    const node = new LinkedListNode(1)

    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2)
    const node1 = new LinkedListNode(1, node2)

    expect(node2.value).toBe(2)
    expect(node2.next).toBeNull()
    expect(node1.value).toBe(1)
    expect(node1.next).toBeDefined()
    expect(node1.next.value).toBe(2)
  })

  test('should create string from node', () => {
    const node = new LinkedListNode(2)
    const str = node.toString()

    expect(str).toBe('2')

    const strFromFn = node.toString(v => `(${v})`)
    expect(strFromFn).toBe('(2)')
  })
})
