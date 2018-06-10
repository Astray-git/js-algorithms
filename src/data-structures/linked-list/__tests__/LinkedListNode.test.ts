import LinkedListNode from '../LinkedListNode'

describe('LinkedListNode', () => {
  test('should create a node with value but no next', () => {
    const node = new LinkedListNode(1)

    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })
})
