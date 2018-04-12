const createBinaryTree = require("../utils").createBinaryTree;
const log = require("../utils").log;
const  in_order_traversal = require('./in_order_traversal').in_order_traversal;
// Given a binary tree, how do you get its mirrored tree?

function mirror(node) {

    if(!node){
        return ;
    }

    let root = node;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    mirror(node.left);
    mirror(node.right);


}

test
var root = createBinaryTree();
in_order_traversal(root);
console.log("");
mirror(root);
in_order_traversal(root);
console.log("");

exports.mirror = mirror;

