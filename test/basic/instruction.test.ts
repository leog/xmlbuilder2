import $$ from '../TestHelpers'

describe('ins()', () => {

  test('basic', () => {
    const root = $$.create().ele('root')
    const node1 = root.ele('node1')
    node1.ins('target1', 'content').ele('node1-2')
    const node2 = root.ele('node2')
    node2.ins('target2')

    expect($$.printTree(root.doc().node)).toBe($$.t`
      root
        node1
          ? target1 content
          node1-2
        node2
          ? target2
        `)
  })

})
