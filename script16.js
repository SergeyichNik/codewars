    // 1 * (2 + 3) = 5
    // 1 * 2 * 3 = 6
    // 1 + 2 * 3 = 7
    // (1 + 2) * 3 = 9

// function expressionMatter(a, b, c) {
//     let arr = [a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c];
//     console.log(arr);
//     arr = arr.sort((a, b) => a - b);
//     return arr[4]
// }

// console.log(expressionMatter(1, 1, 1))

function opposite(num) {
    return num * -1;
}