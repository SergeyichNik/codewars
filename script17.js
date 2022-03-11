// function symmetricPoint(p, q) {
//     return [2 * q[0] - p[0], 2 * q[1] - p[1]];
// }

// console.log(symmetricPoint([0,0], [1,1]));

// function oddCount(n){
//    return Math.floor(n / 2)
// }

// console.log(oddCount(7))

// function usdcny(usd) {
//     return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// }



// console.log(usdcny(8008))


function pillars(num_pill, dist, width) {
    num_pill === 1 ? 0 : ((dist * 100) * (num_pill - 1)) + (width * (num_pill - 2))  
}

console.log(pillars(11, 15, 30))