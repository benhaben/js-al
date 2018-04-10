const createBinaryTree = require("../utils").createBinaryTree;
const log = require("../utils").log;
const Stack = require("../utils").Stack;

/*****
 对于任一结点P，

 1)若其左孩子不为空，则将P入栈并将P的左孩子置为当前的P，然后对当前结点P再进行相同的处理；

 2)若其左孩子为空，则取栈顶元素并进行出栈操作，访问该栈顶结点，然后将当前的P置为栈顶结点的右孩子；

 3)直到P为NULL并且栈为空则遍历结束
 *****/
function in_order_traversal_not_recursive(node) {

    var stack = new Stack();
    stack.push(node);

    var cur = node;
    while (stack.size() !== 0 && cur) {
        while (cur.left) {
            cur = cur.left;
            stack.push(cur);
        }

        cur = stack.pop();
        log(cur.data);

        if (cur.right) {
            cur = cur.right;
            stack.push(cur);
        }
    }
}

var root = createBinaryTree();
in_order_traversal_not_recursive1(root);
process.stdout.write('\n');
