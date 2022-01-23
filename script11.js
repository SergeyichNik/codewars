

function squareSum(numbers){
    if (numbers.length != 0) {
        let arr = [];
        numbers.forEach(item => {
          arr.push(item * item);
        });
    
        return arr.reduce((sum, current) => sum + current);
    } else {
        return 0;
    }

}

console.log(squareSum([]))  