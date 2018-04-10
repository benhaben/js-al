const isArray = require('../utils').isArray;

// https://blog.csdn.net/hguisu/article/details/7776068

a = [49, 38, 65, 97, 76, 13, 27];


/*** 交换类排序
 1）选择一个基准元素,通常选择第一个元素或者最后一个元素,
 2）通过一趟排序讲待排序的记录分割成独立的两部分，其中一部分记录的元素值均比基准元素值小。另一部分记录的 元素值比基准值大。
 3）此时基准元素在其排好序后的正确位置
 4）然后分别对这两部分记录用同样的方法继续进行排序，直到整个序列有序。
 */
function quick_sort(a) {
    if (!isArray(a)) {
        throw 'not array';
    }

    if (a.length <= 1) {
        return a;
    }
    var arrSmall = [];
    var arrBig = [];

    var pivot = 0;
    for (var i = 1; i < a.length; i++) {

        if (a[i] > a[pivot]) {
            arrBig.push(a[i]);
            arrBig = quick_sort(arrBig);
        } else {
            arrSmall.push(a[i]);
            arrSmall = quick_sort(arrSmall);
        }
    }
    var ret = arrSmall.concat(a[pivot]).concat(arrBig);
    return ret;

}

function partion(a, low, high) {

    var pivot = a[low];
    while (low < high) {
        while (low < high && a[high] >= pivot) {
            high--;
        }

        let temp = a[high];
        a[high] = a[low];
        a[low] = temp;

        while (low < high && a[low] <= pivot) {
            low++;
        }

        temp = a[high];
        a[high] = a[low];
        a[low] = temp;
    }
    return low;
}

function quick_sort_without_auxiliary_memory(a) {

    if (!isArray(a)) {
        throw 'not array';
    }

    if (a.length <= 1) {
        return a;
    }

    var low = 0;
    var high = a.length - 1;

    var pivot = partion(a, low, high);
    partion(a, low, pivot - 1);
    partion(a, pivot + 1, high);
}

// a = quick_sort(a);
quick_sort_without_auxiliary_memory(a);
console.log(a);