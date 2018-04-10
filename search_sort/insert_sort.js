const isArray = require('../utils').isArray;

// https://blog.csdn.net/hguisu/article/details/7776068

a = [2, 3, 4, 6, 1, 5];


/***
 * 将一个记录插入到已排序好的有序表中，从而得到一个新，记录数增1的有序表。
 * 即：先将序列的第1个记录看成是一个有序的子序列，然后从第2个记录逐个进行插入，直至整个序列有序为止。
 * 要点：设立哨兵，作为临时存储和判断数组边界之用。
 * 时间复杂度：O（n^2）.
 */
function insert_sort(a) {
    if (!isArray(a)) {
        throw 'not array';
    }

    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) {
            var sentry = a[i];
            let m = i;
            for (; m > 0; m--) {
                if (sentry > a[m])
                    break;

                a[m] = a[m - 1];
            }
            a[m] = sentry;
        }
    }
}



insert_sort(a);
console.log(a);