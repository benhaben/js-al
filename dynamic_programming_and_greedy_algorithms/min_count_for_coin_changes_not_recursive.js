/***
 Please implement a function that gets the minimal number of coins with values v1, v2, …, vn, to
 make change for an amount of money with value t. There are an infinite number of coins for each value vi.
 For example, the minimum number of coins to make change for 15 out of a set of coins with values 1, 3, 9, 10 is
 3. We can choose two coins with value 3 and a coin with value 9. The number of coins for other choices should be
 greater than 3.
 */
const log = require('../utils').log;
let total = 3;
let coins = [1, 3, 9, 10];

function GetMinCount(total, coins) {

    let minArr = [];
    for (let i = 0; i < total; i++) {
        minArr[i] = 0;
    }

    for (let i = 0; i < coins.length; i++) {
        minArr[coins[i] - 1] = 1;
    }


    for (let i = 0; i < total; i++) {
        for (let c = 0; c < coins.length; c++) {

            let money = i + 1;
            if (money > coins[c]) {
                //当前可能计算过了，只需要记录最小值
                let temp = minArr[i] === 0 ? 999 : minArr[i];
                let curMin = minArr[money - coins[c] -1] + 1;
                minArr[i] = curMin > temp ? temp : curMin;
            }
        }
    }
    return minArr[total - 1];
}
// log(GetMinCount(15, coins));

//121232341122233
log(GetMinCount(1, coins));
log(GetMinCount(2, coins));
log(GetMinCount(3, coins));
log(GetMinCount(4, coins));
log(GetMinCount(5, coins));
log(GetMinCount(6, coins));
log(GetMinCount(7, coins));
log(GetMinCount(8, coins));
log(GetMinCount(9, coins));
log(GetMinCount(10, coins));
log(GetMinCount(11, coins));
log(GetMinCount(12, coins));
log(GetMinCount(13, coins));
log(GetMinCount(14, coins));
log(GetMinCount(15, coins));
console.log("");