const log = require("../utils").log;
const isNumeric = require("../utils").isNumeric;


// 设置两个变量保存fib的值，往前移动，需要处理奇数偶数情况
function fibonacci_not_recursive_without_cache_bad(n) {
    if (!isNumeric(n)) {
        throw "not a number";
    }

    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    var isOdd = true;
    if (n % 2 == 0) {
        isOdd = false;
    }

    n = n / 2 + 1;

    var pre1 = 0;
    var pre2 = 1;
    for (var i = 2; i <= n; i++) {
        pre1 = pre1 + pre2;
        pre2 = pre1 + pre2;
    }
    if (isOdd) {
        return pre2;
    } else {
        return pre1;
    }
}

//设置两个变量，但是每次只向前移动一个位置
function fibonacci_not_recursive_without_cache(n) {
    if (!isNumeric(n)) {
        throw "not a number";
    }

    if (n <= 0) {
        return 0;
    }
    if (n < 1) {
        return 1;
    }

    var fib1 = 0;
    var fib2 = 1;
    for (var i = 2; i <= n; i++) {
        fib2 = fib1 + fib2;
        fib1 = fib2 - fib1; //往前移动一个位置
    }
    return fib2;
}

try {
    fibonacci_not_recursive_without_cache("s");
} catch (e) {
    console.log(e);
}
log(fibonacci_not_recursive_without_cache(0)); //0
log(fibonacci_not_recursive_without_cache(1)); //1
log(fibonacci_not_recursive_without_cache(2)); //1
log(fibonacci_not_recursive_without_cache(3)); //2
log(fibonacci_not_recursive_without_cache(4)); //3
log(fibonacci_not_recursive_without_cache(5)); //5
log(fibonacci_not_recursive_without_cache(6)); //8
log(fibonacci_not_recursive_without_cache(7)); //13
log(fibonacci_not_recursive_without_cache(10));//55

console.log("test end");
