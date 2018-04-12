// Please check whether a number is a power product of 2 in only one C statement.

const log = require('../utils').log;

function power_product_of_2(n) {
    return n != 0 && (((n - 1) & n) === 0);
}

log(power_product_of_2(1));//1
log(power_product_of_2(2));//01
log(power_product_of_2(3));//11
log(power_product_of_2(4));//100
log(power_product_of_2(5));//101
log(power_product_of_2(6));//110
log(power_product_of_2(7));//111
log(power_product_of_2(8));//1000
log(power_product_of_2(9));
console.log("");