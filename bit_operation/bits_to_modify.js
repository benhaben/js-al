/***
 *Given two integers, m and n, please calculate the number of bits in binary that need to be
 modified to change m to n. For example, the number 10 is 1010 in binary, and 13 is 1101 in binary. We can
 modify 3 bits of 1010 to get 1101 in binary.
 */
const log = require('../utils').log;


function bits_to_modify(n, m) {
    let c = n ^ m;

    let count = 0;
    while (c != 0) {
        c = (c - 1) & c;
        count++;
    }
    return count;
}

log(bits_to_modify(10,13));
console.log("");