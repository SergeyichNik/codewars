// // function symmetricPoint(p, q) {
// //     return [2 * q[0] - p[0], 2 * q[1] - p[1]];
// // }

// // console.log(symmetricPoint([0,0], [1,1]));

// // function oddCount(n){
// //    return Math.floor(n / 2)
// // }

// // console.log(oddCount(7))

// // function usdcny(usd) {
// //     return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// // }



// // console.log(usdcny(8008))


// // function pillars(num_pill, dist, width) {
// //     num_pill === 1 ? 0 : ((dist * 100) * (num_pill - 1)) + (width * (num_pill - 2))  
// // }

// // console.log(pillars(11, 15, 30))
// // function isToday(date) {
// //     const now = new Date();
// //       if(typeof(date) === 'object') {
// //         return now.getDate() === date.getDate();
// //       } else if(typeof(date) === 'number') {
// //         return now.getDate() === date;
// //       }
// //   }

// // const now = new Date();
// // const nowStr = now.getDate().toString();


// // console.log(now.getDate() === JSON.parse(nowStr))

// // const date = '2061-10-16T22:39:11.257Z';
// // console.log(JSON.parse(JSON.stringify(new Number(date.substring(8,10)))) === now.getDate())
// // function greet(name){
// //   return `Hello, ${name} how are you doing today?`;
// // }

// // function removeEveryOther(arr){
// //   let newArr = []
// //   for (let i = 0; i < arr.length; i++) {
// //     if (i % 2 === 0) {
// //       newArr.push(arr[i]) 
// //     }
// //   }
// //   return newArr;
// // }


// // console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// const rps = (p1, p2) => {
//   switch (p1[0] + p2[0]) {
//       case 'pp':
//       case 'ss':
//       case 'rr': return 'Draw!'
//       case 'sp' || 'ps': 
//       case 'pr': 
//       case 'rs': return 1
//       case 'sr':
//       case 'ps':
//       case 'rp': return 2
//   }
// };



// console.log(rps('scissors','paper'))
// console.log(rps('scissors', 'scissors'))
// console.log(rps('paper', 'scissors'))

// function find_max(nums) {
//    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//    for (let num of nums) {
//     if (num > max_num) {
//    // (Fill in the missing line here)
//     }
//   }
//    return max_num;
// }
// console.log(Number.NEGATIVE_INFINITY)

//b:2, i:9, n:14, g:7, o:15

// function bingo(a) {
// 	let b = 0;
// 	let i = 0;
// 	let n = 0;
// 	let g = 0; 
// 	let o = 0;
// 	let res;
// 	for (let x = 0; x < a.length; x++) {
// 		if (a[x] === 2 ) b += 1 
// 		if (a[x] === 9) i += 1 
// 		if (a[x] === 14) n += 1 
// 		if (a[x] === 7) g += 1  
// 		if(a[x] === 15) o +=1
// 	}
// 	if (b > 0 && i > 0 && n > 0 && g > 0 && o > 0) {
// 		res = 'WIN'
// 	} else {
// 		res = 'LOSE'
// 	} 
// 	return res;
// }

//  console.log(bingo([21,13,2,7,5,14,7,15,9,10]))

function zeroAndOne(s) {
	let match = 0
	for (let i = 0; i < s.length; i++) {
		if((s[i] + s[i + 1]) === '10' || s[i] + s[i + 1] === '01'){
			match += 1
			i++
		}
	}
	return s.length - match * 2;
  }

let a = '01010'

  console.log(zeroAndOne(a))