// Number of 1 in Binary

const log = require('../utils').log;

function number_of_1(n) {
    let count = 0;
    while (n != 0) {
        n = (n - 1) & n;
        count++;
    }
    return count;
}

log(number_of_1(1));//1
log(number_of_1(2));//01
log(number_of_1(3));//11
log(number_of_1(4));//100
log(number_of_1(5));//101
log(number_of_1(6));//110
log(number_of_1(7));//111
log(number_of_1(9));
console.log("");