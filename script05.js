const arr = ['bad', 'bad', 'bad', 'bad'];

function well(x){
    let reg = /good/gi;
    let newArr = reg.exec(x);
    if (newArr.length = 0) {
        return 'Fail!';
    }
    if (newArr.length > 2) {
        return 'I smell a series!';
    } else {
        return 'Publish!';
    }

}

console.log(well(arr));