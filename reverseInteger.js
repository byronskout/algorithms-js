function reverseInt(integer) {
   let int = parseInt(
             integer
             .toString()
             .split("")
             .reverse()
             .join("")
    ) * Math.sign(integer);
    return int
}