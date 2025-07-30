//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
    constructor(v) {
        this.data = v
        this.left = this.right = null
    }
    insert(v) {
        function _insert(curr, node) {
            if (curr.data >= node.data && !curr.left) {
                curr.left = node
                return
            }
            if (curr.data < node.data && !curr.right) {
                curr.right = node
                return
            }
            _insert(curr.data >= node.data ? curr.left : curr.right, node)
        }
        const node = new BinarySearchTree(v)
        _insert(this, node)
    }
    each(fn) {
        this.left ? this.left.each(fn) : 0
        fn(this.data)
        this.right ? this.right.each(fn) : 0
    }
}