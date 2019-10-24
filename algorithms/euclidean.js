function euclideanAlgorithm(num1, num2) {
    const a = Math.abs(num1);
    const b = Math.abs(num2);
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
  }