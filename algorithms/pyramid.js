function pyramid(n) {
  let levels = "";
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++)
      level += midpoint - row <= column && column <= midpoint + row ? "." : " ";
    levels += level + "\n";
  }

  return levels;
}
