function fib(n) {
    var table = [];
    table.push(1);
    table.push(1);
    for (var i = 2; i < n; ++i) {
        table.push(table[i - 1] + table[i - 2]);
    }
    console.log("Fibonacci #%d = %d", n, table[n - 1]);
}