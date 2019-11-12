function averagemean(numberss) {
    "use strict";
    var sum = 0;
    var avg;
    numberss.forEach(function (current) {
        sum += current;
    });
    avg = sum / numberss.length;
    return avg;
}
