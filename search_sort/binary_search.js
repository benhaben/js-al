const isArray = require('../utils').isArray;


// 二分查找：每次和中间的数字比较，效率高
const a =
    [1, 2, 3, 4, 5, 6, 7, 8, 9];

//递归的时候，如果切断a，就不知道具体的index，所以不能改变a，只能传递start，end作为参数
function _binary_search_recursive(a, x, start, end) {

    if (start <= end) {
        let n = Math.floor((start + end) / 2);
        if (x < a[n]) {
            end = n - 1;
            return _binary_search_recursive(a, x, start, end);
        } else if (x > a[n]) {
            start = n + 1;
            return _binary_search_recursive(a, x, start, end);
        } else if (x == a[n]) {
            return n;
        } else {
            // 溢出了，js并不会崩溃
            return -1;
        }
    }
    else {
        return -1;
    }
}

function _binary_search_recursive1(arr, find, low, high) {
    if (low <= high) {
        if (arr[low] == find) {
            return low;
        }
        if (arr[high] == find) {
            return high;
        }
        var mid = Math.floor((high + low) / 2);
        if (arr[mid] == find) {
            return mid;
        } else if (arr[mid] > find) {
            return _binary_search_recursive1(arr, find, low, mid - 1);
        } else {
            return _binary_search_recursive1(arr, find, mid + 1, high);
        }
    }
    return -1;
}

function binary_search(a, x) {
    return _binary_search_recursive(a, x, 0, a.length - 1);
}

function binary_search1(a, x) {
    if (!isArray(a)) {
        throw 'not array';
    }

    for (let start = 0, end = a.length - 1; start <= end && start >= 0 && start < a.length;) {

        let n = Math.floor((start + end) / 2);

        if (x < a[n]) {
            end = n - 1;
        } else if (x > a[n]) {
            start = n + 1;
        } else if (x == a[n]) {
            return n;
        } else {
            // 越界
            break;
        }

    }
    return -1;
}


console.log(binary_search(a, -1));
console.log(binary_search(a, 10));
console.log(binary_search(a, 1));
console.log(binary_search(a, 3));
console.log(binary_search(a, 6));
console.log(binary_search(a, 7));
console.log(binary_search(a, 9));