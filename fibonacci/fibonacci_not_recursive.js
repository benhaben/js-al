const log = require("../utils").log;
const isNumeric = require("../utils").isNumeric;
var cache = [0, 1, 1, 2];

//计算第n个数字 0 1 1 2 3 ...
function fibonacci_not_recursive(n) {

    if (!isNumeric(n)) {
        throw "not a number";
    }

    var start = 0;
    var end = n;
    if (cache.length >= n) {
        return cache[n];
    } else {
        start = cache.length;
    }

    for (var i = start; i <= end; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[end];
}


try {
    fibonacci_not_recursive("s");
} catch (e) {
    console.log(e);
}
log(fibonacci_not_recursive(0));
log(fibonacci_not_recursive(1));
log(fibonacci_not_recursive(2));
log(fibonacci_not_recursive(3));
log(fibonacci_not_recursive(10));
log(cache);


console.log("test end");
