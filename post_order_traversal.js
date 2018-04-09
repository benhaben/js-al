const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;

// 后序遍历按照“左孩子-右孩子-根结点”的顺序进行访问。
function post_order_traversal(node) {
    if (!node) {
        return;
    }
    post_order_traversal(node.left);
    post_order_traversal(node.right);
    log(node.data);
}

var root = createBinaryTree();
post_order_traversal(root);
process.stdout.write('\n');