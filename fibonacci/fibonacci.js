const log = require("../utils").log;
const isNumeric = require("../utils").isNumeric;

//计算第n个数字 0 1 1 2 3 ...
function fibonacci(n) {

    if (!isNumeric(n)) {
        throw "not a number";
    }

    if (n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

try {
    fibonacci("s");
} catch (e) {
    console.log(e);
}
log(fibonacci(0));
log(fibonacci(1));
log(fibonacci(2));
log(fibonacci(3));
log(fibonacci(10));

console.log("test end");
