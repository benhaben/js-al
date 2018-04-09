
function Node() {
    this.left = null;
    this.right = null;
    this.data = "";
}

function createBinaryTree() {
    var root = new Node();
    root.data = 'a';

    var l1 = new Node();
    l1.data = 'b';
    root.left = l1;

    var l2 = new Node();
    l2.data = 'c';
    l1.left = l2;

    var l1r1 = new Node();
    l1r1.data = 'd';
    l1.right = l1r1;

    var r1 = new Node();
    r1.data = 'e';
    root.right = r1;

    var r1r2 = new Node();
    r1r2.data = 'f';
    r1.right = r1r2;

    return root;
}

function log (str){
    process.stdout.write(str);
    process.stdout.write('\t');

}
exports.createBinaryTree = createBinaryTree;
exports.Node = Node;
exports.log = log;
