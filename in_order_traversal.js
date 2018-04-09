const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;

// 中序遍历按照“左孩子-根结点-右孩子”的顺序进行访问。
function in_order_traversal(node) {
    if (!node) {
        return;
    }
    in_order_traversal(node.left);
    log(node.data);
    in_order_traversal(node.right);
}



var root = createBinaryTree();
in_order_traversal(root);
process.stdout.write('\n');
