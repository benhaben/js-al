/**
 *Please implement a function to verify whether a binary tree is symmetrical. A tree is
 symmetrical if its mirrored image looks the same as the tree itself.
 There are three binary trees in Figure 6-3. The first tree is symmetrical, but the second and the third are not.
 */

// 对称的树前序遍历和先访问右子树的前序遍历应该是一样的。

function symmetrical_tree(node) {
    return _symmetrical_tree(node, node);
}

function _symmetrical_tree(left, right) {

    if (left == null && right == null) {
        return true;
    }

    if (left == null || right == null) {
        return false;
    }

    if (left.data == right.data) {

        _symmetrical_tree(left.left, right.right);
        _symmetrical_tree(left.right, right.left);

    } else {
        return false;
    }

}