function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }
  
  // 1 sec = 1000ms
  // 1min = 60000ms
  // 1hour = 3,5e+6

let arr = [2, 2, 2];

function getAverage(marks){
    return Math.floor(marks.reduce((sum, current) => sum + current) / marks.length);  
}

console.log(getAverage(arr));

const areaOrPerimeter = function(l , w) {
    return l == w ? l * w : (l + w) * 2;
};

function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0 ? true : false;
  }

function makeNegative(num) {
return num >= 0 ? num * -1 : num;
}  