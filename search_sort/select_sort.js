const isArray = require('../utils').isArray;

// https://blog.csdn.net/hguisu/article/details/7776068

a = [2, 3, 4, 6, 1, 5];

/***
 选择排序—简单选择排序（Simple Selection Sort）
 在要排序的一组数中，选出最小（或者最大）的一个数与第1个位置的数交换；然后在剩下的数当中再找最小（或者最大）的与第2个位置的数交换，
 依次类推，直到第n-1个元素（倒数第二个数）和第n个元素（最后一个数）比较为止。
 */
function select_sort(a) {
    if (!isArray(a)) {
        throw 'not array';
    }

    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
}


select_sort(a);
console.log(a);