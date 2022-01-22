const arr = ['good', 'good', 'good', 'good', 'bad'];
const arr1 = ['bad'];
const arr2 = ['good', 'good', 'bad'];

function well(x){
    let newArr = [];
    x.forEach(item => {
        if (item == 'good') {
            newArr.push(item)
        }
    })
    if (newArr.length > 0) {
        if (newArr.length > 2) {
            return 'I smell a series!';
        } else {
            return 'Publish!';
        }
    } else {
        return 'Fail!';
    }


}

console.log(well(arr));
console.log(well(arr1));
console.log(well(arr2));