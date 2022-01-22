function getGrade (s1, s2, s3) {
    let num = Math.floor(((s1 + s2 + s3) / 3) / 10);
    const arr = ['F', 'D', 'C', 'B', 'A'];
    if (num == 10) {
        return 'A';
    }
    if (num <= 4) {
        return 'F';
    } else {
        return arr[num - 5];
    } 
}

console.log(getGrade(0,62,70));