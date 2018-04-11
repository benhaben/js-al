/***
 Please implement a function that gets the minimal number of coins with values v1, v2, …, vn, to
 make change for an amount of money with value t. There are an infinite number of coins for each value vi.
 For example, the minimum number of coins to make change for 15 out of a set of coins with values 1, 3, 9, 10 is
 3. We can choose two coins with value 3 and a coin with value 9. The number of coins for other choices should be
 greater than 3.
 */

let total = 15;
let coins = [1, 3, 9, 10];
let choice = [];

function GetMinCount(total, coins, count = 1) {

    for (let i = 0; i < coins.length; i++) {
        if (total === coins[i]) {
            choice.push(count);
            return;
        }
    }

    for (let i = 0; i < coins.length; i++) {
        if (total > coins[i]) {
            let sub = total - coins[i];
            GetMinCount(sub, coins, count + 1);
        }
    }
}

GetMinCount(total, coins)
choice.sort((a, b) => {
    return a - b;
});
console.log(choice);