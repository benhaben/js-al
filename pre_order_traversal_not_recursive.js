const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;
const Stack = require("./utils").Stack;

function inorder_traversal_not_recursive(node) {

    var stack = new Stack();
    stack.push(node);

    var cur = node;
    while (stack.size() !== 0 && cur) {

        while (cur) {
            log(cur.data);
            if (cur.right) {
                stack.push(cur.right);
            }
            cur = cur.left;
        }
        cur = stack.pop();
    }

}

var root = createBinaryTree();
inorder_traversal_not_recursive(root);
process.stdout.write('\n');