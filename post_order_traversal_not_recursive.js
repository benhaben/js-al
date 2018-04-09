const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;
const Stack = require("./utils").Stack;

// 后序遍历按照“左孩子-右孩子-根结点”的顺序进行访问。
// 要保证根结点在左孩子和右孩子访问之后才能访问，因此对于任一结点P，先将其入栈。
// 如果P不存在左孩子和右孩子，则可以直接访问它；或者P存在左孩子或者右孩子，但是其左孩子和右孩子都已被访问过了，则同样可以直接访问该结点。
// 若非上述两种情况，则将P的右孩子和左孩子依次入栈，这样就保证了每次取栈顶元素的时候，左孩子在右孩子前面被访问，左孩子和右孩子都在根结点前面被访问。
function post_order_traversal_not_recursive(node) {
    var stack = new Stack();
    stack.push(node);
    var cur = node;
    var pre = null;
    while (stack.size() !== 0 && cur) {

        cur = stack.top();
        if ((cur.left == null && cur.right == null) || (pre == cur.left || pre == cur.right)) {
            log(cur.data);
            pre = stack.pop();
            continue;
        }

        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }

    }
}

//哪找左边先入栈，如果退栈的时候访问到节点p一次，则不能打印，继续访问右边节点，第二次到节点p的时候，打印p
function post_order_traversal_not_recursive1(node) {
    var stack = new Stack();
    stack.push(node);
    var cur = node;

    while (stack.size() !== 0 && cur) {

        while (cur.left && cur.first) {
            cur = cur.left;
            stack.push(cur);
        }

        cur = stack.pop();
        if (cur.first) {
            cur.first = false;
            stack.push(cur)
            if (cur.right) {
                stack.push(cur.right);
                cur = cur.right;
            }
        } else {
            log(cur.data);
        }

    }

}

var root = createBinaryTree();
// post_order_traversal_not_recursive(root);
post_order_traversal_not_recursive1(root);
process.stdout.write('\n');