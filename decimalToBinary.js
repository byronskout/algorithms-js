function decimalToBinary(n) {
    var bin = [];
    while (n > 0) {
    bin.unshift(n % 2);
    n >>= 1;
    }
    console.log("The decimal in binary is " + bin.join(""));
  }