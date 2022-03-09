function symmetricPoint(p, q) {
    return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}

console.log(symmetricPoint([0,0], [1,1]));