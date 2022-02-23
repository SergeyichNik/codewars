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

// function opposite(num) {
//     return num * -1;
// }

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }

// function greet() {
//    return "hello world!";
// }

// console.log(typeof(greet))

function remainder(n, m){
    
    if (m === 0 && n > 0) {
        return NaN
    }
    if (n < m) {
        return m % n
    } else {
        return n % m
    }
      
}

console.log(remainder(-178, 989))
console.log(remainder(13, 72))
console.log(remainder(0, -1))
console.log(remainder(0, 1))
console.log(remainder(-956, 0))