const createBinaryTree = require("./utils").createBinaryTree;
const log = require("./utils").log;


function inorder_traversal(node) {
    if (!node) {
        return;
    }
    inorder_traversal(node.left);
    log(node.data);
    inorder_traversal(node.right);
}



var root = createBinaryTree();
inorder_traversal(root);
process.stdout.write('\n');
