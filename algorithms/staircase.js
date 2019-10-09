function steps(n) {
  let stairs = "";

  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++)
      stair += column <= row ? "_" : " ";

    stairs += stair + "\n";
  }

  return stairs;
}
