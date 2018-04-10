function Node() {
    this.left = null;
    this.right = null;
    this.data = "";
    this.first = true;
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

/********* stack*/
function Stack() {
    this._stack = [];
}

Stack.prototype.push = function (node) {
    this._stack.push(node);
};
Stack.prototype.top = function () {
    if (this._stack.length > 0) {
        return this._stack[this._stack.length - 1];
    }
    else {
        return null;
    }
};
Stack.prototype.pop = function () {
    return this._stack.pop();
};
Stack.prototype.size = function () {
    return this._stack.length;
};

/*********stack*/

function log(str) {
    process.stdout.write(str.toString());
    process.stdout.write('\t');

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}


exports.createBinaryTree = createBinaryTree;
exports.Node = Node;
exports.log = log;
exports.Stack = Stack;
exports.isNumeric = isNumeric;
exports.isArray = isArray;
