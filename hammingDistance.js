function sum(arr) {
    return arr.reduce(function(acc, e) { return acc + e; })
}

function mi(p, q) {
    if (p.length != q.length) throw "Sequences need to be of same length!";
    return p.map(function(e, i) { return [e, q[i]]; })
}