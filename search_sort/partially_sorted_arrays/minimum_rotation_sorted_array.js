/***
 When some elements at the beginning of an array are moved to the end, it becomes a rotation
 of the original array. Please implement a function to get the minimum number in a rotation of an increasingly
 sorted array. For example, the array {3, 4, 5, 1, 2} is a rotation of array {1, 2, 3, 4, 5}, of which the minimum is 1.
 */

const isArray = require('../../utils').isArray;

//注意不支持有相同元素的
let a = [3, 4, 5, 1, 2];
let b = [2, 3, 4, 5, 1];
let c = [];
let d = [1, 2, 3, 4, 5];
let e = [5, 0, 1, 2, 3, 4];
let f = [1];

let g = [1,0,1,1,1,1];

function getMin(a) {
    if (!isArray(a)) {
        throw 'not array';
    }

    let low = 0;
    let hight = a.length - 1;

    while (low < hight) {
        let n = Math.floor((low + hight) / 2);

        if (a[low] < a[n] && a[low] > a[hight]) {
            low = n;
        } else if (a[n] < a[hight]) {
            hight = n;
        } else {
            break;
        }
    }
    return a[hight];
}


console.log(getMin(a));
console.log(getMin(b));
console.log(getMin(c));
console.log(getMin(d));
console.log(getMin(e));
console.log(getMin(f));
console.log(getMin(g));
