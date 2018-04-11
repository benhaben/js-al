/**
 I am going to sort ages of all employees in our company. The total number is tens of
 thousands.
 You can only utilize space less than O(n).
 */

var ages = [2, 3, 5, 6, 7, 99, 88, 77];

function count_sort_ages(ages) {

    //max is 99
    const MaxAge = 100;

    let agesCount = [];
    for (let i = 0; i < MaxAge; i++) {
        agesCount[i] = 0;
    }

    for (let i = 0; i < ages.length; i++) {
        agesCount[ages[i]]++
    }

    let index = 0;
    for (let i = 0; i < MaxAge; i++) {
        let count = agesCount[i];
        for(let j = 0; j < count; j++){
            ages[index] = i;
            index++;
        }
    }
}
count_sort_ages(ages);
console.log(ages);