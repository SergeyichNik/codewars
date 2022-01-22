function countSmileys(arr) {
    let num = 0;
    arr.forEach(item => {
        if (item == ':)' || item == ':D' || item == ':~D' || item == ':-D' || item == ':-)' || item == ':~)' || item == ';)' || item == ';D' || item == ';~D' || item == ';-D' || item == ';-)' || item == ';~)') {
            num++
        }
    })
    return num;
}

console.log(countSmileys([':D',':~)',';~D',':)', ';oD']));
console.log(countSmileys([]));
