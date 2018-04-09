const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;

// 前序遍历按照“根结点-左孩子-右孩子”的顺序进行访问。
function pre_order_traversal(node) {
    if (!node) {
        return;
    }
    log(node.data);
    pre_order_traversal(node.left);
    pre_order_traversal(node.right);
}



var root = createBinaryTree();
pre_order_traversal(root);
process.stdout.write('\n');